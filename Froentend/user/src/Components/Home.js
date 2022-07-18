import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  
  const [inpval, setInput] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
 
const [data,setdata]= useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
const addData=(e)=>{
    e.preventDefault();
   const {name,email,date,password}=inpval;
   if (name==='  ') {
    alert ("name feild is required")
    }else if (email===""){
        alert("email feild is required")
    }else if (!email.includes('@')){
  alert("Please enter valid mail address")
    }else if ( date===""){
        alert ("filling the date is mandetory")
    }else if (password===""){
        alert("Password feild is required")
    }else if (password.length<5){
        alert ("password length should be greater than five")
    }else{
        console.log ("data added succesfully");
        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
    }
}
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className=".left_data">
            <h3 className="text-center col-lg-6 ">User Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicdate"
              >
                <Form.Control type="date" name="date"  onChange={getdata}/>
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67,185,127)" }}
                type="Submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              {" "}
              Already Have an Account <span><NavLink to="/Login">SignIn</NavLink></span>{" "}
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
}

export default Home;
