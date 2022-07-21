import React , {useEffect} from 'react'
import Head from 'next/head'
import Header from './header';
import Script from 'next/script';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Layouts({children}) {
  // console.log(process.env);
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);
    
  return (
  <>
  
  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
    </Script>
  <Head>
    <title>Best Deals</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    
  </Head>
  <Header/>
  {children}
  {/* 'footer' */}
  </>
  )
}
