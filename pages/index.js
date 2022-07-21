import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-md-12'>
            <h1 className='text-center p-3'>Amazon Deals</h1>
        </div>
        <div className='col-md-2 text-center'>
            <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style={{width:'120px',height:'240px'}} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pranaysurve-21&language=en_IN&marketplace=amazon&region=IN&placement=B0B3MNYGTW&asins=B0B3MNYGTW&linkId=1b161bdd67c7c3a82366a65216c008a3&show_border=true&link_opens_in_new_window=true"></iframe>
        </div>
        <div className='col-md-2 text-center'>
            <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style={{width:'120px',height:'240px'}} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=pranaysurve-21&language=en_IN&marketplace=amazon&region=IN&placement=B09TVV1TXL&asins=B09TVV1TXL&linkId=6356ca93e915d75ec5c28ebcc60466e4&show_border=true&link_opens_in_new_window=true"></iframe>        
        </div>
      </div>
    </div>
  )
}
