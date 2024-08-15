import React, { useState, useCallback, useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import { Icon } from '@iconify/react'

import Examples from './examples'
import SCHEMA from './apiv2-json-schema.json'

const MIN_HEIGHT = 170
const MAX_HEIGHT = 500

export default function ApiV2Example({ request }) {
  const [code, setCode] = useState(JSON.stringify(Examples[request], null, 2))
  const [canReset, setCanReset] = useState(false)
  const [response, setResponse] = useState(null)

  const onCodeChange = useCallback((code) => {
    setCode(code)
    setCanReset(true)
  })

  const resetCode = useCallback(() => {
    setCode(JSON.stringify(Examples[request], null, 2))
    setCanReset(false)
    setResponse(null)
  })

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code)
  })

  const runCode = useCallback(async () => {
    setResponse(null)

    const response = await fetch('/api/v2/docs/query', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: code
    })
    const data = await response.json()

    setResponse({
      status_code: response.status_code,
      status_text: response.status_text,
      ok: response.ok,
      data
    })
  })

  return (
    <Tabs>
      <TabItem label="Query" value="query">
        <div style={{ position: "relative" }}>
          <JsonSchemaEditor
            schema={SCHEMA}
            value={code}
            onChange={onCodeChange}
          />
          <div style={{ position: "absolute", top: 2, right: 2 }}>
            {canReset && (
              <button title="Reset query" className="code-button" onClick={resetCode}>
                <Icon icon="carbon:reset-alt" />
              </button>
            )}
            <button title="Copy query" className="code-button" onClick={copyCode}>
              <Icon icon="uil:copy" />
            </button>
            <button title="Run query" className="code-button" onClick={runCode}>
              <Icon icon="ant-design:code-outlined" />
            </button>
          </div>
        </div>
      </TabItem>
      <TabItem label="Example Response" value="example_response">
        <pre>{code}</pre>
      </TabItem>
      {response && (
        <TabItem label="Response" value="response">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </TabItem>
      )}
    </Tabs>
  )
}

function JsonSchemaEditor({ value, schema, onChange }) {
  const [height, setHeight] = useState(MIN_HEIGHT)
  const editorRef = useRef()

  const onMount = useCallback((editor, monaco) => {
    editorRef.current = editor

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(schema)
    editor.onDidChangeModelContent(handleEditorChange)
    handleEditorChange()
  })

  const handleEditorChange = useCallback(() => {
    const editAreaHeight = editorRef.current.getContentHeight()
    if (editAreaHeight > height && height < MAX_HEIGHT) {
      setHeight(editAreaHeight)
    }
  }, []);

  return (
    <Editor
      theme="vs-dark"
      language="json"
      value={value}
      height={height}
      options={{
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        fixedOverflowWidgets: true,
        glyphMargin: false,
        wordWrap: 'off',
        lineNumbers: 'on',
        tabFocusMode: false,
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: false,
        scrollBeyondLastLine: false,
      }}
      onMount={onMount}
      onChange={onChange}
    />
  )
}