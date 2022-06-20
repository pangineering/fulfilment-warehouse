import React from 'react'
import { Container, Button } from "react-bootstrap"

function SettingScreen() {
  return (
    <Container fluid>
           <Container>
      <h1>Setting</h1>
      <Container>
        <h2>Personal</h2>
        <Button>Save</Button>
        <hr />
      </Container>
      <Container>
        <h2>Account</h2>
        <Button>Save</Button>
        <hr />
      </Container>
      <Container>
        <h2>Warehouse Detail</h2>
        <Button>Save</Button>
        <hr />
      </Container>
    </Container>
    </Container>
  )
}

export default SettingScreen