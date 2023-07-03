import React from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export const FormComponent2 = () => {
  return (
    <Form>
      <Row>
        <Col sm={6}>
          <FormGroup row>
            <Label for="student" sm={4}>
              Student
            </Label>
            <Col sm={8}>
              <Input id="student" name="student" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactPerson" sm={4}>
              Contact Person
            </Label>
            <Col sm={8}>
              <Input id="contactPerson" name="contactPerson" placeholder="Contact Person" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contactNo" sm={4}>
              Contact Number
            </Label>
            <Col sm={8}>
              <Input id="contactNo" name="contactNo" placeholder="Contact Number" type="number" />
            </Col>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup row>
            <Label for="classRoom" sm={4}>
              Class Room
            </Label>
            <Col sm={8}>
              <Input id="classRoom" name="classRoom" placeholder="Class Room" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={4}>
              Email
            </Label>
            <Col sm={8}>
              <Input id="email" name="email" placeholder="Email" type="email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="dob" sm={4}>
              Date of Birth
            </Label>
            <Col sm={8}>
              <Input id="dob" name="dob" placeholder="Date of Birth" type="text" />
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
