import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Shipping from './screens/Shipping';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Copay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>
      <nav className=" d-flex justify-content between ">
       <div><Link href="/screens/Shipping">Shipping</Link></div> 
       <div><Link href="/screens/payment">Payment</Link></div> 
       <div><Link href="/screens/delivery">Delivery</Link></div> 
      </nav>
      </div> */}
      
       <div>
       <Shipping />
       </div>

    </div>
  )
}
