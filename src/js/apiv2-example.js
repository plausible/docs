import React, {useState, useCallback, useRef} from 'react'
import { Editor } from '@monaco-editor/react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import Examples from './examples'
import SCHEMA from './apiv2-json-schema.json'

const MIN_HEIGHT = 170
const MAX_HEIGHT = 500

export default function ApiV2Example({ request }) {
  const [value, setValue] = useState(JSON.stringify(Examples[request], null, 2))

  const onCodeChange = useCallback((value) => {
    setValue(value)
  })

  return (
    <Tabs>
      <TabItem label="Request" value="request">
        <JsonSchemaEditor
          schema={SCHEMA}
          defaultValue={value}
          onChange={onCodeChange}
        />
      </TabItem>
      <TabItem label="Response" value="response">
        <pre>{value}</pre>
      </TabItem>
    </Tabs>
  )
}

function JsonSchemaEditor({ defaultValue, schema, onChange }) {
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
      defaultValue={defaultValue}
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
