import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className ="error-page section">
      <div className="error-container">
        <h1>oops! its a dead end</h1>
        <Link className ="btn btn-primary" to ="/">Go Home</Link>
      </div>
    </section>
  )
}

export default Error