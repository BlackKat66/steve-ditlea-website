"use client";

import { Tab, Tabs } from "react-bootstrap";

const AdminContent = () => (
  <Tabs defaultActiveKey={"articles"}>
    <Tab eventKey="articles" title="Articles" >
      Upload articles here.
    </Tab>
    <Tab eventKey="photos" title="Photos">
      Upload photos here.
    </Tab>
  </Tabs>
); 

export default AdminContent;