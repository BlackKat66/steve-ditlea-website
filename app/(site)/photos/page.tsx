"use client";

import Divider from "../components/divider";
import Photo from "./photo";
import { demoPhotos } from "./demoPhotos";

import { Col, Row } from "react-bootstrap";

const Photos = () => (
  <section className="page-section portfolio" id="photos" style={{marginTop: "-3rem"}}>
    <div className="container">
      <Divider iconClass="fa fa-camera" title="Photos" />
      <Row xs={1} sm={1} lg={2}>
        {demoPhotos.map((photoProps, index) => (
          <Col key={`photo-${index}`}>
            <Photo {...photoProps} />
          </Col>
        ))}
        {demoPhotos.map((photoProps, index) => (
          <Col key={`photo-${index}-2`} >
            <Photo {...photoProps} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Photos; 