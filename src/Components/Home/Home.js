import React from "react";
import "./Home.scss";

import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import {
  FaHandHoldingHeart,
  FaStar,
  FaCheckCircle,
  FaStopwatch,
} from "react-icons/fa";
import img from "./league2.png";
import "../../Sass/_variables.module.scss";

const Home = () => {
  return (
    <>
      <Row>
        <div className="imgRow">
          <Row>
            <Col md="auto" sm="auto">
              <h1 className="bannerTitle">LEAGUE OF LEGENDS</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto" sm="auto">
              <p className="bannerText">
                Reach your dream rank effortlessly with our Efficient and <br />
                customer-oriented safeELO Boosting, Coaching & Account Buying
                <br />
                Services by Challenger players.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="auto" sm="auto">
              <Button style={{ borderRadius: "10px 0 0 10px" }}>
                BOOST ME
              </Button>
              <Button
                style={{
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                COACHING
              </Button>
              <Button style={{ borderRadius: "0 10px 10px 0" }}>
                ACCOUNTS
              </Button>
            </Col>
          </Row>
        </div>
      </Row>
      <Container style={{ maxWidth: "1500px" }}>
        <Row className="cardRow" style={{ margin: "2%" }}>
          <Col>
            <Card className="text-center">
              <Card.Img />
              <Card.Body>
                <span>
                  <FaStopwatch />
                </span>
                <Card.Title>INSTANT DELIVERY</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img />
              <Card.Body>
                <span>
                  <FaCheckCircle />
                </span>
                <Card.Title>TRUSTED</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img />
              <Card.Body>
                <span>
                  <FaStar />
                </span>
                <Card.Title>EXPERIENCED</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img />
              <Card.Body>
                <span>
                  <FaHandHoldingHeart />
                </span>
                <Card.Title>24/7 SUPPORT</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row className="carouselRow">
          <Col sm={8}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={4} style={{ padding: "5%" }}>
            <Row className="justify-content-md-center justify-content-sm-center">
              <Col md="auto" sm="auto">
                <h2 style={{ fontStyle: "italic" }}>HOW DOES IT WORK?</h2>
              </Col>
              <Col md="auto" sm="auto">
                <ul>
                  <li>Choose the game you need more ELO</li>
                  <li>Choose the boost type</li>
                  <li>Place your order. Chat with a professional player</li>
                  <li>The PRO player helps you get more ELO</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default Home;
