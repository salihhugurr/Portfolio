import React from 'react';
import {About,Footer,Header,Skills,Work} from './container'
import {Navbar} from './components';
import {Helmet} from 'react-helmet';
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Salih</title>
      </Helmet>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
    </div>
  );
}

export default App;