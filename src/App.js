import React, {useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

import './App.css';



function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'projects',
    },
    { name: 'Contact', description: 'name, email, message'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div> 
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
      <ContactForm></ContactForm>
      <Footer></Footer>
        </main>
        </div>
  );
};

export default App;
