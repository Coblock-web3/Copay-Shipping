import Link from 'next/link';
import Head from 'next/head';
import Script from "next/script";
import Item from '../increament';


const  Address = ()=>{
  return(
      <div className=' address'>
        <p className=''>shipping Address</p>
        <input type="text" name="" id=""  placeholder='Street'/>
        <input type="text" placeholder='Country' />
      </div>

  )
}
function Shipping({ Component, pageProps }) {
  return (
    <div className='d-flex'>
    
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <title>Shipping</title>
      </Head>
   
      <form action="#" className='fom'>
   
        <div className=' '>

        {/* <nav className='navbar navbar-expand-lg navbar-light bg-light"'>
           <Link href="/">Shipping</Link>
           <Link href="#">Delivery</Link>
           <Link href="#">Payment</Link>
          
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-light  justify-content-between">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">Shipping</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Delivery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Payment</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

          <h3>Copay Seller</h3>
        
          <p className='m-3'>Buyers Contact details</p>
         <div className='buyers'> <input  type="text" placeholder='Email' />
         <input type="text"placeholder= '(---) Phone'/></div>
         <div className='buyer'><input type="text"placeholder='first Name'/>
         <input type="text"placeholder='Last Name'/></div>
        </div>

        <div>
          <Address />
        </div>
        <div>
          <p className='m-3'>Building,room, floor no. </p>
         <div className='building '> <input type="text" placeholder='no' /> </div>
        </div>

        <p className='m-3'>Building,room, floor no. </p> 
        <div className='d-flex m-3 form-row'>
        <input className='w-25' type="text" placeholder='Zip' />
        <input className='w-25' type="text" placeholder='City' />
        <input className='w-25' type="text" placeholder='State' />
        </div>

        <div className='p-3'>
          <button type="submit" className='w-25' >proceed</button>
        </div>
      </form>

      <div>
           <h6 className=''>check summary</h6>
        <div className='d-flex'>
           <div className='me-5'><img src="" alt="" />img</div>
           <div className=''>
            
            
           <Item />
            
           </div>
           
        </div>

        <div>
          <h6>Promo</h6>
          <div>
            <div className='d-flex justify-content-between'>
              <div>subtotal</div>
              <div>$00.00</div>
            </div>
            <div className='d-flex  justify-content-between'>
              <div>delivery</div>
              <div>fee</div>
            </div>
            <div className='d-flex  justify-content-between'>
              <div>HST</div>
              <div>$0.00</div>
            </div>
            <div className='d-flex  justify-content-between'>
              <div><h6>Total</h6></div>
              <div><h6>$00.00</h6></div>
            </div>
          </div>
        </div>

      </div>

      

    
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      

    
    
    </div>
  );
}
export default Shipping;