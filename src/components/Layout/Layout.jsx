import React from 'react'
import Routers from '../../Router/Routers'
import { Container, Row, Col } from "reactstrap";
import SideBar from '../SideBar/SideBar';
const Layout = () => {
  return (
    <>
      <Container className='layout' >
        <Row>
          <SideBar />
          <Routers />
        </Row>
      </Container>
    
    </>
    
  )
}

export default Layout