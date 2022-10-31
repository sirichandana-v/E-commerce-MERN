import "./LoginSignUp.css";
import React, { Fragment, useRef, useState, useEffect } from 'react';
import Loader from '../layouts/Loader/Loader';
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {useDispatch, useSelector} from "react-redux";
import {clearErrors, login, register } from "../../Actions/userAction";
import { useAlert } from "react-alert"
import { useNavigate } from "react-router-dom";

function LoginSignUp() {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );


const switchTabBtn=useRef(null);
const loginTab=useRef(null);
const registerTab=useRef(null);

const [loginEmail,setLoginEmail]=useState("");
const [loginPassword,setLoginPassword]=useState("");



  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

const { name, email, password } = user;

const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  }
  
  const registerSubmit=e=>{
      e.preventDefault();
  
      const myForm=new FormData();
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("avatar", avatar);
      
  
      dispatch(register(myForm));
  }
  
  const registerDataChange=(e)=>{
      if(e.target.name==="avatar"){
          const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };
  
        reader.readAsDataURL(e.target.files[0]);
  
      }
      else{
          setUser({ ...user, [e.target.name]: e.target.value });
      }
  }
  




  let navigate = useNavigate()
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(`/account`);
      
    }
  }, [dispatch, error, alert, isAuthenticated,]);

const switchTabs=(e, tab)=>{
    if(tab==="login"){
        switchTabBtn.current.classList.add("shiftToNeutral");
        switchTabBtn.current.classList.remove("shiftToRight");
        
        registerTab.current.classList.remove("shiftToNeutralForm");
        loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
        switchTabBtn.current.classList.add("shiftToRight");
        switchTabBtn.current.classList.remove("shiftToNeutral");
  
        registerTab.current.classList.add("shiftToNeutralForm");
        loginTab.current.classList.add("shiftToLeft");
      }

}


// const redirect = location.search ? location.search.split("=")[1] : "/account";




  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
    <Fragment>
        <div className="loginSignUp">
            <div className="loginSignUp__box">
            <div>
            <div className="loginSignUp__toggle">
                    <p onClick={e=>switchTabs(e,"login")}>LOGIN</p>
                    <p onClick={e=>switchTabs(e,"register")}>REGISTER</p>
                </div>
                <button ref={switchTabBtn}></button>
            </div> 
            <form className="loginSignUp__loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginSignUp__loginEmail">
                    <MailOutlineIcon/>
                    <input type="email" placeholder="Email" required value={loginEmail} onChange={e=>setLoginEmail(e.target.value)}/>
                </div>
                <div className="loginSignUp__loginPassword">
                    <LockOpenIcon/>
                    <input type="password" placeholder="Password" required value={loginPassword} onChange={e=>setLoginPassword(e.target.value)} />
                </div>
                <Link to="/password/forgot">Forget Password</Link>
                <input type="submit" value="Login" className="loginSignUp__loginSubmit" />
            </form>

            <form className="loginSignUp__signupForm" ref={registerTab} onSubmit={registerSubmit} encType="mulitipart/form-data">
                <div className="loginSignUp__signupName">
                    <AccountCircleIcon/>
                    <input type="text" placeholder="Name" name="name" required value={name} onChange={registerDataChange}/>
                </div>
                <div className="loginSignUp__signupEmail">
                    <MailOutlineIcon/>
                    <input type="email" placeholder="Email" name="email" required value={email} onChange={registerDataChange}/>
                </div>
                <div className="loginSignUp__signupPassword">
                    <LockOpenIcon/>
                    <input type="password" placeholder="Password" name="password" required value={password} onChange={registerDataChange} />
                </div>
                <div id="signupImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                  <input type="file" name="avatar" accept="image/*"  onChange={registerDataChange}/>
                </div>

                <input type="submit" value="Register" className="loginSignUp__registerSubmit" />
            </form>     
            </div>

        </div>
    </Fragment>
    )}
    </Fragment>
  );
}

export default LoginSignUp