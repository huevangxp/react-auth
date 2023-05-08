import React from 'react'

const Error = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-4 mb-4 font-weight-bold text-danger">Oops! Something went wrong.</h1>
      <p className="lead text-muted">We're sorry, but an error has occurred.</p>
    </div>
  )
}

export default Error