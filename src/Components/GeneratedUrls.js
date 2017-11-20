import React from 'react'
import './GeneratedUrls.css'

const UrlRow = ({mappedUrl}) => (
  <tr>
    <td>
      <a href={mappedUrl.kortyCode}>{window.location.host + '/' + mappedUrl.kortyCode}</a> {/* TODO: Global object */}
    </td>
    <td>
      <a href={mappedUrl.targetUrl}>{mappedUrl.targetUrl}</a>
    </td>
  </tr>
)

const GeneratedUrls = ({mappedUrls}) => (
  <div className="GeneratedUrls">
    <h2>Latest kortified URLs</h2>
    <table>
      <thead>
        <tr>
          <td>Kortified URL</td>
          <td>Target URL</td>
        </tr>
      </thead>
      <tbody>
        {mappedUrls && mappedUrls.map(mappedUrl => <UrlRow mappedUrl={mappedUrl} />)}
      </tbody>
    </table>
  </div>
)

export default GeneratedUrls
