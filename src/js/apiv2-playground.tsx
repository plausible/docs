import React, { useState, useCallback, useContext, Fragment } from 'react'
import Admonition from '@theme/Admonition'

import { SiteContext } from './sites'
import EXAMPLES, { getExampleCode } from './examples'
import { ApiV2Editor, JsonSchemaEditor, postQuery } from './apiv2-editor'
import { Icon } from '@iconify/react'

export function ApiV2Playground() {
  const { selectedSite } = useContext(SiteContext)

  const [id, setExample] = useState("example-aggregate")
  const [code, setCode] = useState(getExampleCode("query", id, selectedSite))
  const [response, setResponse] = useState(null)

  const onCodeChange = useCallback((code: string) => {
    setCode(code)
    setResponse(null)
  }, [])

  const runCode = useCallback(async () => {
    setResponse(null)
    const [response, data] = await postQuery(code)

    setResponse({
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      data
    })
  }, [code])

  return (
    <Fragment>
      <div className="playground-run-code">
        <select
          value={id}
          onChange={(e) => setExample(e.target.value)}
          title="Select example query"
        >
          {EXAMPLES.map((example) => (<option key={example.id} value={example.id}>{example.title}</option>))}
        </select>

        <button onClick={runCode}>
          Run query <Icon icon="ant-design:code-outlined" width="1.3em" height="1.3em" />
        </button>
      </div>

      <ApiV2Editor
        id={id}
        code={code}
        onChange={onCodeChange}
      />

      {response && response.data !== "" && (
        <div>
          <hr />
          <h3>Response</h3>
          <p>Status: <code>{response.status}</code> - <code>{response.statusText}</code></p>
          <JsonSchemaEditor
            readOnly
            value={response.data}
          />
        </div>
      )}
    </Fragment>
  )
}

export function ExamplesTip({children}) {
  const { isLoggedIn } = useContext(SiteContext)

  return (
    <Admonition type="tip">
      {children}

      {!isLoggedIn && (
        <p><a href="/login" target="_blank">Click here to log in</a></p>
      )}
    </Admonition>
  )
}
