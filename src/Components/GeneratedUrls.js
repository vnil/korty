import React from 'react'
import './GeneratedUrls.css'
import { makeUrl } from '../Helpers/urlHelpers'

const UrlRow = ({mappedUrl}) => (
  <tr>
    <td>
      <a href={mappedUrl.kortyCode}>{makeUrl(mappedUrl.kortyCode)}</a>
    </td>
    <td>
      <a href={mappedUrl.targetUrl}>{mappedUrl.targetUrl}</a>
    </td>
  </tr>
)

const GeneratedUrls = ({data}) => (
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
        {data && data.map(mappedUrl => <UrlRow mappedUrl={mappedUrl} key={mappedUrl.kortyCode} />)}
      </tbody>
    </table>
  </div>
)

export default GeneratedUrls
