import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="btn btn-primary" to="/">Blog</Link>
          <Link className="btn btn-info" to="/admin">Admin</Link>
        </div>
      </nav>

      <div className="container">
        {children}
      </div>

      <hr/>
      <p>some text</p>
    </div>
  )
}

export default Layout