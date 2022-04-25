import React from "react"
import { Col, Row, Container, Button } from "react-bootstrap"
import  '../App.css';

const MyFooter = () => ( <Container>
    <Row md={12} className="justify-content-md-center">
      <Row md={6}>
<Col md={12}>
<div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Audio and Subtitles</a>
  </div>
  <div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Audio Description</a>
  </div>
  <div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Help Center</a>
  </div>
  <div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Gift Cards</a>
  </div>
</Col>
</Row>
<Row md={6}>
<Col md={12}>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Media Center</a>
</div>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Investor Relations</a>
</div>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Jobs</a>
</div>
  </Col>
</Row>
<Row md={6}>
<Col md={12}>
  <div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Use</a>
  </div>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy</a>
</div>
 <div>
 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CarLegal Noticesds</a>
 </div>
</Col>
</Row>
<Row md={6}>
<Col md={12}>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Cookie Preferences</a>
</div>
<div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Corporate Information</a>
</div>
 <div>
 <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact Us</a>
 </div>
</Col>
</Row>
</Row>
<Row className="justify-content-md-center">
<Col md={12}>
  <br />
  <Button variant="outline-light">Service Code</Button>{' '}
</Col>
<Col md={12}>
  <p id="footer-text" className="">
    copy 1997-2019 Netflix, Inc.
  </p>
</Col>
</Row>
</Container>
);
export default MyFooter