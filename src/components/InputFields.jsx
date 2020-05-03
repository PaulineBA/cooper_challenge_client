import React from 'react';
import { Form, Container } from 'semantic-ui-react';

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
    <Container style={{width: 800}}>
      <Form>
    <Form.Field>
      <label>Distance</label>
      <input placeholder='Distance' 
      onChange={onChangeHandler}
        name="distance" 
        id="distance"/>

    </Form.Field>
    <Form.Field>
      <label>Age</label>
      <input placeholder='Age' 
        onChange={onChangeHandler} 
        name="age" 
        id="age"/>

    </Form.Field>
    <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
  </Form>
  </Container>
    </>
  )
 }

export default InputFields