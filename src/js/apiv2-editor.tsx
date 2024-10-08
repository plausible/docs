import React, { useState, useCallback, useRef, useContext, useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import { Icon } from '@iconify/react'
import stringify from 'json-stringify-pretty-compact'

import { getExampleCode } from './examples'
import { SiteContext } from './sites'

const MIN_HEIGHT = 170
const MAX_HEIGHT = 500

type APIEditorProps = {
  id: string,
  code: string,
  onChange: (code: string) => void,
  onRunCode?: () => void,
}

export function ApiV2Editor({ id, code, onChange, onRunCode }: APIEditorProps) {
  const { isLoggedIn, sites, selectedSite, selectSite } = useContext(SiteContext)

  const [canReset, setCanReset] = useState(false)

  useEffect(() => {
    if (!canReset && isLoggedIn) {
      onChange(getExampleCode("query", id, selectedSite))
    }
  }, [id, selectedSite, canReset, isLoggedIn])

  const onCodeChange = useCallback((code: string) => {
    onChange(code)
    setCanReset(true)
  }, [])

  const resetCode = useCallback(() => {
    onChange(getExampleCode("query", id, selectedSite))
    setCanReset(false)
  }, [])

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <JsonSchemaEditor
        schema="/api/docs/query/schema.json"
        value={code}
        onChange={onCodeChange}
        readOnly={!isLoggedIn}
      />
      <div style={{ position: "absolute", top: 2, right: 2, display: "flex" }}>
        {canReset && (
          <button title="Reset query" className="code-button" onClick={resetCode}>
            <Icon icon="carbon:reset-alt" />
          </button>
        )}
        <button title="Copy query" className="code-button" onClick={copyCode}>
          <Icon icon="ant-design:copy-outlined" />
        </button>
        {isLoggedIn && !canReset && (
          <select
            value={selectedSite}
            onChange={(e) => selectSite(e.target.value)}
            className="site-select"
            title="Site to run query against"
          >
            {sites.map((siteDomain) => (<option key={siteDomain} value={siteDomain}>{siteDomain}</option>))}
          </select>
        )}
        {isLoggedIn && onRunCode && (
          <button title="Run query" className="code-button" onClick={onRunCode}>
            <Icon icon="ant-design:code-outlined" />
          </button>
        )}
      </div>
    </div>
  )
}

type EditorProps = {
  value: string,
  schema?: string,
  onChange?: (code: string) => void,
  readOnly?: boolean
}

export function JsonSchemaEditor({ value, schema, onChange, readOnly }: EditorProps) {
  const [height, setHeight] = useState(MIN_HEIGHT)
  const editorRef = useRef<any>()

  const onMount = useCallback((editor, monaco) => {
    editorRef.current = editor

    if (schema) {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [{
          uri: `${window.location.origin}${schema}`,
          fileMatch: ["*"],
        }],
        enableSchemaRequest: true
      })
    }
    editor.onDidChangeModelContent(handleEditorChange)
    handleEditorChange()
  }, [schema])

  const handleEditorChange = useCallback(() => {
    const editAreaHeight = editorRef.current.getContentHeight()
    if (editAreaHeight > height && height < MAX_HEIGHT) {
      setHeight(editAreaHeight)
    }
  }, [editorRef]);

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
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: false,
        scrollBeyondLastLine: false,
        readOnly: readOnly
      }}
      onMount={onMount}
      onChange={onChange}
    />
  )
}

export async function postQuery(query: string): Promise<[Response, string]> {
  let response: Response
  try {
    response = await fetch('/api/docs/query', {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: query
    })

  } catch (error_response) {
    response = error_response
  }

  try {
    const data = await response.json()

    return [response, stringify(data)]
  } catch (error) {
    return [response, ""]
  }
}

