import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Script from 'next/script';
function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script id='google-analytics-script' strategy="beforeInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    
    <Script id='google-tagmanager-script' strategy="beforeInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCF9LSF');
        `} 
    </Script>
    <nav className="shopping_mart_navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link href='/'>
                <a className="navbar-brand">Pranay Shoping Mart</a>
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
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCF9LSF" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
    </>
  )
}
export async function getStaticProps() {
    return {
      props: {},
    }
  }
  export default Header;