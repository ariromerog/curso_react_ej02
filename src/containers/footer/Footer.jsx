import Container from 'react-bootstrap/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Container>
	  <p>c2021 Super Trusted Company</p>
      </Container>
    </section>
  );
}

export default Footer;
