import React, {useState, useCallback, useRef, useMemo, useEffect} from 'react'
import { Editor } from '@monaco-editor/react'

import Examples from './examples'
import SCHEMA from './apiv2-json-schema.json'

const MIN_HEIGHT = 170
const MAX_HEIGHT = 500

export default function ApiV2Example({ request }) {
  const [height, setHeight] = useState(MIN_HEIGHT)
  const editorRef = useRef()

  const onMount = useCallback((editor, monaco) => {
    editorRef.current = editor

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(SCHEMA)
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
      defaultValue={JSON.stringify(Examples[request], null, 2)}
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
    />
  )
}
