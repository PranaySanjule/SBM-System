import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../actions/userActions";

function SignupModal() {
  const navigate = useNavigate();

  const [showpassword, setShowpassword] = useState(false);
  const [name, setName] = useState();
  const [route, setRoute] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleClick = () => setShowpassword(!showpassword);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(register(name, route, email, password, confirmpassword));

    // setLoading(true);
    // if (!name || !route || !email || !password || !confirmpassword) {
    //   toast.info("Please Fill all the Fields", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   setLoading(false);
    //   return;
    // }

    // if (password !== confirmpassword) {
    //   console.log("error");
    //   toast.warn("Passwords Do Not Match", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   setLoading(false);
    //   return;
    // }

    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/user",
    //     { name, route, email, password },
    //     config
    //   );
    //   toast.success("Registration Successful", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    //   navigate("/login");
    //   // history.push("/login");
    // } catch (error) {
    //   toast.error("Error! Account Already Exits", {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   setLoading(false);
    // }
  };

  return (
    <>
      <div class="container d-flex align-items-center justify-content-center cont">
        {/* <div class="row card"> */}
        <Card className="signup-card">
          <Card.Body>
            <h1>Create an account</h1>
            <Form>
              <Form.Group
                id="first-name"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                onChange={(e) => setName(e.target.value)}
                required
              >
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <Form.Control
                    className="input-field mb-3"
                    type="name"
                    placeholder="Enter your name"
                    // autoFocus
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group
                id="route"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                onChange={(e) => setRoute(e.target.value)}
                required
              >
                <Form.Label>Select Route</Form.Label>
                <InputGroup>
                  <Form.Select
                    className="route-dropdown"
                    type="route"
                    placeholder="Select Route"
                    size="lg"
                  >
                    <option>Select Route</option>
                    <option>Route 1 (Kanhan - Kadbi Chowk)</option>
                    <option>
                      Route 2 (Uday Nagar Chowk - Pallotti College)
                    </option>
                    <option>Route 3 (Ajni - Manish Nagar)</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <Form.Group
                id="email"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                onChange={(e) => setEmail(e.target.value)}
                required
              >
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    className="input-field mb-3"
                    type="email"
                    placeholder="Enter your email"
                    // autoFocus
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group
                id="password"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    className="input-field"
                    type={showpassword ? "text" : "password"}
                    placeholder="Enter Password"
                    // autoFocus
                  />
                  <InputRightElement
                    height="4rem"
                    width="10rem"
                    onClick={handleClick}
                    Overflow={"hidden"}
                  >
                    <Button variant="dark">
                      {showpassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Form.Group>
              <Form.Group
                id="confirm-password"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                onChange={(e) => setConfirmpassword(e.target.value)}
                required
              >
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    className="input-field"
                    type={showpassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    autoFocus
                  />
                  <InputRightElement
                    height="4rem"
                    width="10rem"
                    onClick={handleClick}
                    Overflow={"hidden"}
                  >
                    <Button variant="dark">
                      {showpassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Form.Group>
              <Modal.Footer className="modal-btn">
                {/* <Button
                // colorScheme="blue"
                width="100%"
                type="submit"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={loading}
              >
                Sign Up
              </Button> */}
                <Button
                  className="btn"
                  variant="warning"
                  onClick={submitHandler}
                  isLoading={loading}
                >
                  Sign Up
                </Button>
              </Modal.Footer>
              <Form.Group className="already-signup">
                Don't have an account yet?{" "}
                <NavLink className="already-login" to={"/login"}>
                  Log in
                </NavLink>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        {/* </div> */}
        {/* <div class="row cross-icon">
          <NavLink to="/">
            <img src={require("../../images/cross.png")} alt="logo" />
          </NavLink>
        </div> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default SignupModal;
