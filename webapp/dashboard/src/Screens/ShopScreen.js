import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function ShopScreen() {
  return (
    <Container fluid>
      <h1>Shop List</h1>
      <Container fluid>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default ShopScreen;
