import React, { useState, useEffect } from "react";
import { ContainerForm, ContentForm } from "../globalStyles";
import { ModalAnchor, ModalDiv, ModalTitle } from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { createUser } from "../../services/hooks/createUser";
import { signUserIn } from "../../services/hooks/signUserIn";
import { useHistory } from "react-router-dom";
import { getAllUsers } from "../../services/hooks/getAllUsers";
import { storeRef } from "../../services/firebase";

export interface StatusAuth {
  verified: boolean;
  userType: string;
}

function LoginPage() {
  const [modal, setModal] = useState(false);
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [statusSignUp, setStatusSignUp] = useState({
    opacity: 0,
    content: "",
    color: "",
  });
  const [statusLogin, setStatusLogin] = useState({ opacity: 0, content: `` });
  const [logoUrlState, setLogoUrlState] = useState("");
  const history = useHistory();

  useEffect(() => {
    const getLogo = async () => {
      const logo = await storeRef
        .ref("todo-logo.webp")
        .getDownloadURL()
        .then((url) => url);
      setLogoUrlState(logo);
    };
    getLogo();
  }, []);

  const handleModalOpen = () => {
    setModal(true);
    setSignEmail("");
    setSignPassword("");
  };

  const handleModalClose = () => {
    setStatusSignUp({ opacity: 0, content: "", color: "" });
    setModal(false);
  };

  const handleSignEmail = (event: any) => {
    setSignEmail(event.target.value);
  };
  const handleSignPassword = (event: any) => {
    setSignPassword(event.target.value);
  };

  const handleLoginEmail = (event: any) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPassword = (event: any) => {
    setLoginPassword(event.target.value);
  };

  const handleSignUpButton = async () => {
    if (signEmail.length === 0 || signPassword.length === 0) {
      setStatusSignUp({
        opacity: 1,
        content: "One or more fields are empty!",
        color: "#F00",
      });
    } else {
      let statusAuthSignUp: boolean = true;
      const allUsers = await getAllUsers();
      allUsers.forEach((e) => {
        if (e.email === signEmail) {
          statusAuthSignUp = false;
        }
      });
      if (statusAuthSignUp) {
        await createUser(signEmail, signPassword).then(() => {
          setStatusSignUp({
            opacity: 1,
            content: "User created!",
            color: "#00a000",
          });
        });
      } else {
        setStatusSignUp({
          opacity: 1,
          content: "Email already exists!",
          color: "#F00",
        });
      }
    }
  };

  const handleSignInButton = async () => {
    const statusAuthSignIn: StatusAuth = await signUserIn(
      loginEmail,
      loginPassword
    );
    if (statusAuthSignIn.verified && statusAuthSignIn.userType === "user") {
      const pathUser = "/toDoPage";
      history.push(pathUser);
    } else if (statusAuthSignIn && statusAuthSignIn.userType === "admin") {
      const pathAdmin = "/adminPage";
      history.push(pathAdmin);
    } else {
      setStatusLogin({
        opacity: 1,
        content: `E-mail or password doesn't exist`,
      });
    }
  };
  return (
    <>
      {logoUrlState ? (
        <ContainerForm>
          <ContentForm>
            <img
              src={logoUrlState}
              style={{ width: "100px", height: "100px" }}
            />
            <h1>Welcome to your ToDos!</h1>
            <h2>Log In to create, edit and much more!</h2>
            <p style={{ opacity: statusLogin.opacity, color: "#F00" }}>
              {statusLogin.content}
            </p>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              onChange={handleLoginEmail}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              style={{ marginTop: "20px" }}
              type="password"
              variant="outlined"
              onChange={handleLoginPassword}
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={handleSignInButton}
              style={{ marginTop: "40px" }}
            >
              Login
            </Button>
            <h4>Don't have an account? </h4>
            <ModalAnchor onClick={handleModalOpen}>Sign up here</ModalAnchor>
            <Modal
              open={modal}
              onClose={handleModalClose}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ModalDiv>
                <ModalTitle>Sign Up</ModalTitle>
                <TextField
                  id="outlined-basic"
                  label="Type in your email"
                  variant="outlined"
                  onChange={handleSignEmail}
                />
                <TextField
                  id="outlined-basic"
                  label="Type in your password"
                  type="password"
                  style={{ marginTop: "10px" }}
                  variant="outlined"
                  onChange={handleSignPassword}
                />
                <p
                  style={{
                    opacity: statusSignUp.opacity,
                    color: statusSignUp.color,
                  }}
                >
                  {statusSignUp.content}
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  onClick={handleSignUpButton}
                  style={{ marginTop: "40px" }}
                >
                  Sign Up
                </Button>
              </ModalDiv>
            </Modal>
          </ContentForm>
        </ContainerForm>
      ) : (
        <></>
      )}
    </>
  );
}

export default LoginPage;
