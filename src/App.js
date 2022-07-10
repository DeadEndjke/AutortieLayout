
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Block from './Components/Block/Block';
import Community from './Components/Community/Community';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HowItWorksBlock from './Components/HowItWorksBlock/HowItWorksBlock';
import LoginRegisterForm from './Components/LoginRegisterForm/LoginRegisterForm';

function App() {

  const [header, setHeader] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isloged={header} />
        <Routes>
          <Route path='/login' element={<LoginRegisterForm changeHeader={header => setHeader(header)} />} />
        </Routes>
        <Block />
        <HowItWorksBlock />
        <Community />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
