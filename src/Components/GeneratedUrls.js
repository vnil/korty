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
    <h2>Latest generated URLs</h2>
    <table>
      <thead>
        <tr>
          <td>Korty Url</td>
          <td>Long Url</td>
        </tr>
      </thead>
      <tbody>
        {mappedUrls && mappedUrls.map(mappedUrl => <UrlRow mappedUrl={mappedUrl} />)}
      </tbody>
    </table>
  </div>
)

export default GeneratedUrls
