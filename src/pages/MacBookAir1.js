import { TextField } from "@mui/material";
import styles from "./MacBookAir1.module.css";
import React, { useState,useEffect } from 'react'



const MacBookAir1 = () => {

  const [data,setData]=useState({
    fname:"",
   
    pass:""
  })
  const [flag,setFlag]=useState(false)
  
  useEffect(() => {
   console.log("regi") 
  }, [flag])
  
  function HandleInput(e){
  setData({...data,[e.target.name]:e.target.value})
  console.log(data)
  }
  
  function HandleSubmit(e){
  e.preventDefault();
  if(!data.fname  || !data.pass){
    alert("fill all the filds")
  }
  else{
  setFlag(true)
  }
  }

  return (
    <>
    <pre>{(flag)? <h3>{data.fname} has sumited the form</h3>:""}</pre>

    <div className={styles.macbookAir1}>
    <form onSubmit={HandleSubmit}>

      <img
        className={styles.campaignCreatorsQciMzvodouIcon}
        alt=""
        src="/campaigncreatorsqci-mzvodouunsplash-1@2x.png"
      />
      <img
        className={styles.macbookAir1Child}
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img className={styles.macbookAir1Item} alt="" src="/vector-1.svg" />
      <div className={styles.welcome}>Welcome</div>
      <div className={styles.logInTo}>log in to your account to continue</div>
      <TextField
        className={styles.macbookAir1Inner}
        sx={{ width: 408 }}
        color="primary"
        variant="standard"
        type="text"
        name="fname"
        placeholder='enter name'
        label="Enter Name"
        value={data.fname}
         onChange={HandleInput}
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 408 }}
        color="primary"
        variant="standard"
        multiline
        name="pass"
        type='text'
        label="Password"
        value={data.pass}
        onChange={HandleInput}
        margin="none"
      />
      <div className={styles.forgotYourPassword}>forgot your password?</div>
      <div className={styles.dontHaveAny}>Don’t have any account? Sign up!</div>
      <button className={styles.logIn}>
        <div className={styles.logIn1}>Log in</div>
      </button>
      </form>

    </div>
    </>
  );
};

export default MacBookAir1;
