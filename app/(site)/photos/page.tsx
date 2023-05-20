"use client";

import Divider from "../components/divider";
import Photo from "./photo";
import { demoPhotos } from "./demoPhotos";

import { Col, Row } from "react-bootstrap";

const Photos = () => (
  <section className="page-section portfolio" id="photos" style={{marginTop: "-3rem"}}>
    <div className="container">
      <Divider iconClass="fa fa-camera" title="Photos" />
      <Row sm={1} lg={3}>
        {demoPhotos.map((photoProps, index) => (
          <Col>
            <Photo {...photoProps} key={`photo-${index}`} />
          </Col>
        ))}
        {demoPhotos.map((photoProps, index) => (
          <Col>
            <Photo {...photoProps} key={`photo-${index}`} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Photos; 