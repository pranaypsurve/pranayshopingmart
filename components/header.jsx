import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function header() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <nav className="shopping_mart_navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link href='/'>
                <a className="navbar-brand" href="/">Pranay Shoping Mart</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto py-2">
                    <li className={`nav-item ${currentRoute === "/" ? "active_menu_hover" : ""}`}>
                        <Link className="nav-link active" href="/">
                            <a className="nav-link text-white" aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentRoute === "/deals_amazon" ? "active_menu_hover" : ""}`}>
                        <Link className="nav-link active" href="deals_amazon">
                            <a className="nav-link text-white">Amazon</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentRoute === "/deals_flipkart" ? "active_menu_hover" : ""}`}>
                        <Link className="nav-link active" href="deals_flipkart">
                            <a className="nav-link text-white">Flipkart</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
