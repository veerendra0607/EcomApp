import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (<>
    {/* first part footer*/}
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src='images/newsletter.png' alt='newsletter' />
              <h2 className='mb-0 text-white'>Sign up for news letter</h2>

            </div>
          </div>
<div className='col-7'>
  <div className='input-group'>
  <input type="text" className="form-control py-1" placeholder="your email address" aria-label="your email address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">
  subscribe
  </span>
  </div>
</div>
        </div>
      </div>
    </footer>

    {/* Second part footer*/}
    <footer className='py-4'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-4'>
      <h4 className='text-white mb-4'>
        Contact Us
      </h4>
     <div>
      <address className='text-white fs-6'>
        Hno : 277 Near Yashvantapura ,<br/> Bangalore, Karnataka<br/>
        PinCode: 560006
      </address>
      <a href='tel:+91 9008434125' className='mt-3 d-block mb-1 text-white'> +91 9008434125</a>
      <a href='mailto:developer@gmail.com' className='mt-3 d-block mb-0 text-white'>developer@gmail.com </a>
      <div className='social_icons d-flex align-items-center gap-30 mt-4'>
        <a className='text-white'><BsLinkedin></BsLinkedin></a>
        <a className='text-white'><BsInstagram></BsInstagram></a>
        <a  className='text-white' ><BsGithub></BsGithub></a>
        <a className='text-white' ><BsYoutube></BsYoutube></a>
      </div>
     </div>
      </div>
    <div className='col-3'>
      <h4 className='text-white mb-4'>
        Information
      </h4>  <div className='footer-links d-flex flex-column'>
        <Link className="text-white py-2 mb-1">Privecy Policy</Link>
        <Link className="text-white py-2 mb-1">Refund Policy</Link>
        <Link className="text-white py-2 mb-1">Shipping Policy</Link>
        <Link className="text-white py-2 mb-1">Terms & conditions</Link>
        <Link className="text-white py-2 mb-1">Blogs</Link>
      </div></div>
    <div className='col-3'>
      <h4 className='text-white mb-4'>
      Account
      </h4>  <div className='footer-links d-flex flex-column'>
        <Link className="text-white py-2 mb-1">About Us</Link>
        <Link className="text-white py-2 mb-1">Faq</Link>
        <Link className="text-white py-2 mb-1">Contact</Link>
       
      </div>
      </div>
    <div className='col-2'>
      <h4 className='text-white mb-4'>
        Quicl Links
      </h4>
      <div className='footer-links d-flex flex-column'>
        <Link className="text-white py-2 mb-1">Laptop</Link>
        <Link className="text-white py-2 mb-1">HeadPhones</Link>
        <Link className="text-white py-2 mb-1">Tablets</Link>
        <Link className="text-white py-2 mb-1">Watches</Link>
      </div>
      </div>
  </div>
</div>

    </footer>

    {/* Third part footer*/}
    <footer className='py-4'>
      <div className='container.xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'> &copy;{new Date().getFullYear()} Powered by Developer Corner</p>
          </div>

        </div>
      </div>
    </footer>
  </>)
}

export default Footer