import React, {useState}from "react";
import Sign_img from "./Sign_img";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



function Login() {
    const history=useNavigate();
  const [inpval, setInput] = useState({
    email: "",
     password: ""
  });

  const [data, setdata] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const getuserArr= localStorage.getItem("useryoutube");
    console.log (getuserArr );
    const { email, password } = inpval;
   if (email === "") {
      alert("email feild is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid mail address");
    }  
     else if (password === "") {
      alert("Password feild is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else {
        if (getuserArr && getuserArr.length){
            const userdata=JSON.parse(getuserArr)
            const userlogin=userdata.filter((el,k)=>{
                return el.email===email && el.password===password

            });
           if (userlogin.length===0){
            alert ("Invalid details")
           }else{
            console.log ("user login succesfully"   );
            localStorage.setItem("user_login",JSON.stringify(userlogin))
            history("/Dashboard")
           }
            
        }
      
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className=".left_data">
            <h3 className="text-center col-lg-6 ">Sign Up</h3>
            <Form>
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
                controlId="formBasicpassword"
              ></Form.Group>

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
              Already Have an Account <span>SignIn</span>{" "}
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
}

export default Login;
