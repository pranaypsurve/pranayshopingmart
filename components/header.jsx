import React from 'react'
import Link from 'next/link'
export default function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/">
                            <a className="nav-link" aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" href="deals_flipkart">
                            <a className="nav-link">Flipkart</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" href="deals_amazon">
                            <a className="nav-link">Amazon</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
