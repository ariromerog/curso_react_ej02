import Form from 'react-bootstrap/Form'

const FormTextbox = ({id='', placeholder='', type='text', help='', label='', rows=5}) => {
  return (
   <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control as="textarea" type={type} placeholder={placeholder} rows={rows} />
    <Form.Text className="text-muted">
    {help}
    </Form.Text>
  </Form.Group>
  );
}

export default FormTextbox;
