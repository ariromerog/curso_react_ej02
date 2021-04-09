import Form from 'react-bootstrap/Form'

const FormInput = ({id='', placeholder='', type='text', help='', label=''}) => {
  return (
   <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} />
    <Form.Text className="text-muted">
    {help}
    </Form.Text>
  </Form.Group>
  );
}

export default FormInput;
