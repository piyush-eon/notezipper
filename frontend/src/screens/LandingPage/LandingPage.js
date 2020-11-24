import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className=" intro-text">
            <div>
              <h1 className="title">
                Welcome to Note Zipper
                <span></span>
              </h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" style={{ width: 200, height: 55 }}>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline-primary"
                  size="lg"
                  style={{ width: 200, height: 55 }}
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
