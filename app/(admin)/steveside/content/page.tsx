"use client";

import { Container, Row, Tab, Tabs } from "react-bootstrap";

const tabStyles = {
  marginTop: "20px",
  borderRadius: "4px", 
  padding: "10px"
};

const AdminContent = () => (
  <Container>
    <Row  className="justify-content-center" style={{border: "1px solid black", ...tabStyles}}>
      <Tabs defaultActiveKey={"articles"} style={{padding: "20px"}}>
        <Tab  eventKey="articles"  title="Articles" style={{ ...tabStyles}}>
          Upload articles here.
        </Tab>
        <Tab eventKey="photos" title="Photos" style={{...tabStyles}}>
          Upload photos here.
        </Tab>
      </Tabs>
    </Row>
  </Container>

);

export default AdminContent;