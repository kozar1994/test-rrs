import React from 'react'

const ArticlePage = ({match: {params: id}}) => {
  return (
    <div>
      <pre>
        {JSON.stringify(id, null, 2)}
      </pre>
      <h1>Article Page</h1>
    </div>
  )
}

export default ArticlePage