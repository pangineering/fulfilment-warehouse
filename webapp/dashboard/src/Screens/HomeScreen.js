import React from 'react'
import {Container} from 'react-bootstrap'
import WarehousePlan from '../Components/WarehousePlan'
import DashboardCard from '../Components/DashboardCard'


function HomeScreen() {
  return (
    <Container fluid>
        <h1>Dashboard</h1>
        <Container fluid>
          <DashboardCard />
        </Container>
        <Container fluid>
          <WarehousePlan />
        </Container>
    </Container>
  )
}

export default HomeScreen