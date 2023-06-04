import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
// import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { NavLink, useNavigate } from "react-router-dom";

const LoginModal = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleClick = () => setShowpassword(!showpassword);
  // const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/userlogin/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <>
      <div class="container d-flex align-items-center justify-content-center cont">
        <Card className="login-card">
          <Card.Body>
            <h1>Log In</h1>
            <Form>
              <Form.Group id="email" className="mb-3" required>
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    placeholder="Enter your email"
                    // value={email}
                    className="input-field"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    // autoFocus
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group
                id="password"
                className="mb-3"
                // controlId="exampleForm.ControlInput1"
                required
              >
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    value={password}
                    className="input-field"
                    type={showpassword ? "text" : "password"}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    // autoFocus
                    required
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
              <Form.Group className="mb-3 check-forgot" controlId="">
                <Form.Check type="checkbox" label="Remember me" />
                <br />
                <Form.Label className="forgot">Forgot Password?</Form.Label>
              </Form.Group>
              <Modal.Footer className="modal-btn">
                <Button
                  variant="warning"
                  className="btn"
                  onClick={submitHandler}
                  isLoading={loading}
                  // type="submit"
                >
                  Log In
                </Button>
              </Modal.Footer>
              <Form.Group className="create-acc">
                Don't have an account yet? <NavLink className="dont-signup" to={"/signup"}>Sign up</NavLink>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <ToastContainer />
    </>
  );
};

export default LoginModal;
