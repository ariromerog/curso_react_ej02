import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormInput from '../../components/form/FormInput'
import FormTextbox from '../../components/form/FormTextbox'

const ContactForm = () => {
  // solo una prueba dud
  useEffect(() => {
    console.log("use effect * ");
  }, []);

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [tarjeta, setTarjeta] = useState('')
  const [expiracion, setExpiracion] = useState('')
  const [cvv, setCvv] = useState('')
  const [mensaje, setMensaje] = useState('')

  // magia del setAlgo
  const hdlNombre = (ev) => {
    console.log( 'Nombre:' , nombre , ' target.value:' , ev.target.value);
    setNombre(ev.target.value);
  }
  const hdlEmail = (e) => { setEmail(e.target.value) }
  const hdlTarjeta = (e) => { setTarjeta(e.target.value) }
  const hdlExpiracion = (e) => { setExpiracion(e.target.value) }
  const hdlCvv = (e) => { setCvv(e.target.value) }
  const hdlMensaje = (e) => { setMensaje(e.target.value) }

  const hdlFormSUbmit = () => {
    console.log("ENVIANDO FORMULARIO");
    console.log('nombre ' , nombre);
    console.log('email ' , email);
    console.log('tarjeta ' , tarjeta);
    console.log('expiracion ' , expiracion);
    console.log('cvv ' , cvv);
    console.log('mensaje ' , mensaje);
  } 
  
  return (
  <section>
    <Container className="my-4">
      <h3>Aprenda Cómo ser una persona motivada!</h3>
      <hr />
      <Form>
      <Row>
        <Col>
        <FormInput id="nombre" 
	  value={nombre} onChange={hdlNombre} 
	  label="Nombre" placeholder="ej. Daddy Yankee" help="Don Omar también es una opción válida"/> 
        </Col>
        <Col>
        <FormInput id="email" 
	  value={email} onChange={hdlEmail} 
	  label="Correo Electrónico" type="email" placeholder="su@correo.com" 
	  help="Utilizaremos este correo para enviar mucho SPAM."/> 
        </Col>
      </Row>
      <Row>
        <Col>
          <FormInput id="tarjeta" 
	  value={tarjeta} onChange={hdlTarjeta} 
	  label="Tarjeta de Crédito" type="number" placeholder="Ej. 123412341234" 
	  help="Sólo lo usaremos para validar su identidad"/> 
        </Col>
        <Col>
          <FormInput id="expiracion" 
	  value={expiracion} onChange={hdlExpiracion} 
	  label="Fecha de Expiración" placeholder="Ej. aa/mm" 
	  help="Esto también"/> 
        </Col>
        <Col>
          <FormInput id="cvv" label="CVV" 
	  value={cvv} onChange={hdlCvv} 
	  placeholder="Ej. 666" 
	  help="No haga caso de nuestro certificado de Lets Encrypt"/> 
        </Col>
      </Row>
      <Row>
	<FormTextbox id="mensaje" label="Mensaje" 
	  value={mensaje} onChange={hdlMensaje} 
	  placeholder="Cuéntanos qué es lo que te motiva a motivarte con nuestra motivación!" />
      </Row>
      <hr />
        <Button variant="outline-danger" size="lg" onClick={hdlFormSUbmit}>Enviar Postulación</Button>	
      </Form>
    </Container>
  </section>
  );
}

export default ContactForm;
