import React , {useEffect} from 'react'
import Head from 'next/head'
import Header from './header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Layouts({children}) {
  // console.log(process.env);
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);
    
  return (
  <>
  <Head>
    <title>Best Deals</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="google-site-verification" content="dZbaa199MCDwkPj086tUgd31-CUAdRD0diMWv145pCw" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Header/>
  {children}
  {/* 'footer' */}
  </>
  )
}
