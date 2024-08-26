import React, { useState, useCallback, useContext } from 'react'
import TabItem from '@theme/TabItem'
import Admonition from '@theme/Admonition'

import Tabs from '../theme/Tabs'
import { SiteContext } from './sites'
import { getExampleCode } from './examples'
import { ApiV2Editor, JsonSchemaEditor, postQuery } from './apiv2-editor'

export function ApiV2Example({ id }) {
  const { selectedSite } = useContext(SiteContext)

  const [activeTab, setActiveTab] = useState("query")
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

    setActiveTab("response")
  }, [])

  return (
    <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
      <TabItem label="Query" value="query">
        <ApiV2Editor
          id={id}
          code={code}
          onChange={onCodeChange}
          onRunCode={runCode}
        />
      </TabItem>
      <TabItem label="Example Response" value="example_response">
        <Admonition type="info">
          <p>Example response for this query</p>
        </Admonition>

        <JsonSchemaEditor
          readOnly
          value={getExampleCode("exampleResponse", id, selectedSite)}
        />
      </TabItem>
      {response && (
        <TabItem label="Response" value="response">
          <Admonition type="info">
            {/* <p><code>POST /api/v2/query</code></p> */}
            <p>Status: <code>{response.status}</code> - <code>{response.statusText}</code></p>
          </Admonition>

          {response.data !== "" && (
            <JsonSchemaEditor
              readOnly
              value={response.data}
            />)}
        </TabItem>
      )}
    </Tabs>
  )
}
