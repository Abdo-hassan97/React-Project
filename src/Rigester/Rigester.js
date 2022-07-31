import React from 'react';
import './Rigester.css'
import GoogleIcon from './../../src/icons8-google.svg';
import FacebookIcon from './../../src/icons8-facebook (1).svg';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const Rigester = () => {



    const [user, setUser] = useState({
        userEmail: "",
        userPassword: "",
        userFirstName: "",
        UserLastName:"",
      });
      const [error, setError] = useState({
        userEmailError: null,
        userPasswordError: null,
        userFirstNameError: null,
        userLastNameError: null,
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
      <>
    <head><meta name="viewport" content="width=device-width, initial-scale=1"></meta></head>  
            <div className='container-fluid'>
        <div className='row m-y-lg one'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Create New Account</h1>
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
<span >or</span>
</div>


<div id='firstNAme' className='row mb-3 fname'>
<label id='fnamelabel' className="control-label col-sm-5 pt-2 f-14 f-500 form-label">First Name</label>
<div className='col-sm-11'>
<input value={user.userFirstName} type="text" onChange={(e) =>AddingEmail(e)} name="userFirstName"></input>
</div>
</div>

<div className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 form-label">Last Name</label>
<div className='col-sm-11'>
<input value={user.UserLastName} type="text" onChange={(e) =>AddingEmail(e)}  name="UserLastName"></input>
</div>
</div>
<div className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 form-label">Email</label>
<div className='col-sm-11'>
<input value={user.userEmail} type="text"  name="userEmail" onChange={(e) =>AddingEmail(e)}></input>
</div>
</div>
<div className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 form-label">Password</label>
<div className='col-sm-11'>
<input value={user.userPassword}  type="password" onChange={(e) =>AddingEmail(e)}  name="userPassword"></input>
</div>
</div>
<div className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 ">Confirm Password</label>
<div className='col-sm-11'>
<input type="password"  name="Password"></input>
</div>
</div>
<div className='row mb-3 lname'>
<label id='glab'  className="control-label col-sm-5 pt-2 f-14 f-500 ">Gender</label>
<div className='col-sm-11 genders'>
<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
  <label id='mal' className="btn btn-outline-primary male" for="btnradio1">male</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label id='fmal' className="btn btn-outline-primary female" for="btnradio2">female</label>
  </div>
</div>
</div>

<div  id='mb' className='row mb-3 lname'>
<label className="control-label col-sm-5 pt-2 f-14 f-500 ">Date of birth</label>
<div className='col-sm-11'>
<input type="date" name="date"></input>
</div>
</div>
<div className='row mb-3 lname'>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className="control-label col-sm-5 pt-2 f-14 f-500 mm" htmlFor="vehicle1"> Subscribe <br></br>to our Newsletter</label>
</div>

<div className='row mb-3 lname'>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className="control-label col-sm-5 pt-2 f-14 f-500 mm" htmlFor="vehicle1"> Subscribe to<br></br> SMS</label>
</div>

<div className='row mb-3 lname'>
<p id='para'> By creating an account you agree to the <span id='sp1'>Privacy Policy</span> and to the <span id='sp2'>terms of use</span></p>
</div>


<div className='row mb-3 lname'>
<button id='createBt'>Create Your Account</button>
</div>

<div className='row mb-3 lname'>
<p id='para2'> Already have an account? <span id='sp2'>Login</span></p>
</div>


            </div>
        
            </>

    );
}

export default Rigester;
