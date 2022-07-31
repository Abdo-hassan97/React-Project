import './LoginMdal.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

import GoogleIcon from './../../src/icons8-google.svg';
import FacebookIcon from './../../src/icons8-facebook (1).svg';

const LoginModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
          <div className='container'>
        <div className='row m-y-lg one'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Login</h1>
        </div>
<div className="d-flex justify-content-center fff">
<img className='icon' src={GoogleIcon} alt="" />
<button className='btngoogle' >
    Continue wih google

</button>
</div>

<div className="d-flex justify-content-around ffff">
<img className='icon2' src={FacebookIcon} alt="" />

<button className='btnfacebook' >Continue wih Facebook</button>
</div>

<div className='text-center mt-8 mb-8 f-28 f-500 '>
<hr className='text-center mt-8 mb-8 f-28 f-500'></hr>
<span >OR</span>
</div>



<div id='emaildiv' className='row mb-3 lname'>
<label id='elabel' className="control-label col-sm-5 pt-2 f-14 f-500 ">Email</label>
<div className='col-sm-11'>
<input id='inp1' type="text"  name="Email"></input>
</div>
</div>
<div id='passdiv' className='row mb-3 lname'>
<label id='plabel' className="control-label col-sm-5 pt-2 f-14 f-500 ">Password</label>
<div className='col-sm-11'>
<input id='inp2' type="password"  name="Password"></input>
</div>
</div>



<div className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 mm" htmlFor="vehicle1"> Keep Me logged in</label>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<p className='para3'>Forgot password?</p>
</div>






<div className='row mb-3 lname'>
<button id='createBt'>Login</button>
</div>

<div className='row mb-3 lname'>
<p id='para2'> Don't have an account? <Link to={`/Rigester`}><span id='sp2'>Create an account</span></Link> </p>
</div>


            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default LoginModal;
