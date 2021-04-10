import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'

const FormInput = ({id='', placeholder='', type='text', help='', label='', value='', onChange}) => {
  
  //const [value, setValue] = useState('')
  //const handleValueChange = (ev) => {
  //  console.log( 'Value:' , value , ' target.value:' , ev.target.value);
  //  setValue(ev.target.value);
  //}

  return (
   <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
    <Form.Text className="text-muted">
    {help}
    </Form.Text>
  </Form.Group>
  );
}

export default FormInput;
