import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './containers/header/Header';
import ContactForm from './containers/contact-form/ContactForm';

function App() {
  return (
  <>
    <Nav />
    <Header />
    <ContactForm />
  </>
  );
}

export default App;
