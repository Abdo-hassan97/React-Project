import React from 'react';
import './Login.css'
import GoogleIcon from './../../src/icons8-google.svg';
import FacebookIcon from './../../src/icons8-facebook (1).svg';
import { useState } from 'react';
// import { Link } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
      });
      const [error, setError] = useState({
        userEmailError: null,
        userPasswordError: null,
      });
      const AddingEmail = (evt) => {
        const regex = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
        const passregex = new RegExp(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
        if (evt.target.name === "userEmail") {
          setUser({
            ...user,
            userEmail: evt.target.value,
          });
          setError({
            ...error,
            userEmailError:
              evt.target.value.length === 0
                ? "this field is required"
                : !regex.test(evt.target.value)
                ? "not match"
                : null,
          });
        } else if (evt.target.name === "userPassword") {
          setUser({
            ...user,
            userPassword: evt.target.value,
          });
          setError({
            ...error,
            userPasswordError:
              evt.target.value.length === 0
                ? "this field is required"
                : evt.target.value.length < 8
                ? "pass is less than 8"
                : passregex.test(evt.target.value)
                ? "Not Match"
                : null,
          });
        }
        
      }
    
    return (
      
<form>
        <div className='container-fluid'>
        <div className='row m-y-lg one'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Login</h1>
        </div>
<div className="d-flex justify-content-around fff">
<img className='icon' src={GoogleIcon} alt="" />
<button className='btngoogle' >
    Continue wih google

</button>
</div>

<div className="d-flex justify-content-around ffff">
<img className='icon2' src={FacebookIcon} alt="" />

<button className='btnfacebook' >Continue wih Facebook</button>
</div>
<br></br>
<br></br>
<div className='text-center mt-8 mb-8 f-28 f-500 '>
<hr className='text-center mt-8 mb-8 f-28 f-500'></hr>
<span >OR</span>
</div>



<div id='smallscreen' className='row mb-3 lname'>
<label id='email' htmlFor="exampleInputEmail1" className="control-label col-sm-5 pt-2 f-14 f-500 form-label">Email</label>
<div className='col-sm-11'>
<input value={user.userEmail} onChange={(e) =>AddingEmail(e)} type="text"  name="userEmail"/>
</div>
</div>
<br></br>
<small id='err1' className="text-danger">{error.userEmailError}</small>

<div id='smallscreenn' className='row mb-3 lname'>
<label id='ps' htmlFor="exampleInputPassword1" className="control-label col-sm-5 pt-2 f-14 f-500 form-label">Password</label>
<div className='col-sm-11'>
<input value={user.userPassword} onChange={(e) =>AddingEmail(e)} type="password"  name="userPassword"/>
</div>
</div>
<small id='err2' className="text-danger">{error.userPasswordError}</small>





<div className='row mb-3 lname'>
<label id='labell' className="control-label col-sm-5 pt-2 f-14 f-500 mm" htmlFor="vehicle1"> Keep Me logged in</label>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<p className='para3'>Forgot password?</p>
</div>






<div className='row mb-3 lname'>
<button id='createBt'>Login</button>
</div>

<div className='row mb-3 lname'>
<p id='para2'> Don't have an account?<span id='sp2'>Create an account</span>  </p>
</div>


            </div>
            </form>
    );
}

export default Login;
