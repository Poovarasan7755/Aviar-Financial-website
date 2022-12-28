import React, { useState } from "react";
import { Container, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../css/login.scss";
function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  const loginSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });

  const submitForm = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Container className="container-forgot">
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => submitForm(values)}
        >
          {(formik) => {
            const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
            return (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center">Log In</h2>
                  <Form.Group className="mt-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      id="username"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage className="error text-danger" component="span" name="name" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <FormControl
                        type={passwordShown ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputGroup.Text>{passwordShown ? <FaEye size={1} /> : <FaEyeSlash size={1} />}</InputGroup.Text>
                    </InputGroup>
                    <ErrorMessage className="error text-danger" component="span" name="password" />
                  </Form.Group>
                  <div className="custom-control custom-checkbox mt-3">
                    <Form.Check type="checkbox" label="Remember me" />
                  </div>
                  <Form.Group className="mt-3">
                    <Button type="submit" className="button_1" disabled={!isValid}>
                      Log In
                    </Button>
                  </Form.Group>

                  <p>
                    Forgot your{" "}
                    <Link className="calculators" to={{ pathname: "/usernameforget" }}>
                      username
                    </Link>{" "}
                    or{" "}
                    <Link className="calculators" to={{ pathname: "/passwordforgot" }}>
                      password?
                    </Link>
                  </p>
                  <br />
                  <p>
                    Don't have an account?{" "}
                    <Link className="calculators" to={{ pathname: "/signup" }}>
                      Create Account<b>.</b>
                    </Link>
                  </p>
                </Form>
              </Container>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;
