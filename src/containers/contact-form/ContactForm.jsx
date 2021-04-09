import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormInput from '../../components/form/FormInput'
import FormTextbox from '../../components/form/FormTextbox'

const ContactForm = () => {
  return (
  <section>
    <Container className="my-4">
      <h3>Aprenda Cómo ser una persona motivada!</h3>
      <hr />
      <Form>
      <Row>
        <Col>
        <FormInput id="nombre" label="Nombre" placeholder="ej. Daddy Yankee" help="Don Omar también es una opción válida"/> 
        </Col>
        <Col>
        <FormInput id="email" label="Correo Electrónico" type="email" placeholder="su@correo.com" help="Utilizaremos este correo para enviar mucho SPAM."/> 
        </Col>
      </Row>
      <Row>
        <Col>
          <FormInput id="tarjeta" label="Tarjeta de Crédito" type="number" placeholder="Ej. 123412341234" help="Sólo lo usaremos para validar su identidad"/> 
        </Col>
        <Col>
          <FormInput id="expiracion" label="Fecha de Expiración" placeholder="Ej. aa/mm" help="Esto también"/> 
        </Col>
        <Col>
          <FormInput id="cvv" label="CVV" placeholder="Ej. 666" help="No haga caso de nuestro certificado de Lets Encrypt"/> 
        </Col>
      </Row>
      <Row>
	<FormTextbox id="msg" label="Mensaje" placeholder="Cuéntanos qué es lo que te motiva a motivarte con nuestra motivación!" />
      </Row>
      <hr />
        <Button variant="outline-danger" size="lg">Enviar Postulación</Button>	
      </Form>
    </Container>
  </section>
  );
}

export default ContactForm;
