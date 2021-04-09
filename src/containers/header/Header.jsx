import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Header.module.css';

const frases = [
  { 'frase': 'El único modo de hacer un gran trabajo es amar lo que haces.', 'autor': 'Steve Trabajos' },
  { 'frase': 'El dinero no es la clave del éxito; la libertad para poder crear lo es', 'autor': 'Nelson Mandela' },
  { 'frase': 'Cuanto más duramente trabajo, más suerte tengo', 'autor': 'Gary Player' },
  { 'frase': 'Sólo hice esto para usar map en JSX.', 'autor': 'Yo' },
];

const Header = () => {
  return (
    <section className={styles.dark}>
      <Container>
          <h2>Programa de auto motivación y exito personal</h2>
          <hr/>
          <Row>
            {frases.map(f=>(
	     <Col>
		<p className={styles.frase}>{f.frase}</p>
		<p className={styles.autor}>{f.autor}</p>
	     </Col>
	    ))}
    	  </Row>
      </Container>
    </section>
  );
}

export default Header;
