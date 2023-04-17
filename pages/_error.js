import React from 'react'

export default function Custom404({statusCode}) {
  return (
    <div>
            <p>
                {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
            </p>
        </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
