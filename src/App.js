
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Block from './Components/Block/Block';
import Community from './Components/Community/Community';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HowItWorksBlock from './Components/HowItWorksBlock/HowItWorksBlock';
import RegisterLogin from './Components/RegisterLogin/RegisterLogin';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Block />
      <HowItWorksBlock />
      <Community />
      <Footer /> */}

      <RegisterLogin />
    </div>
  );
}

export default App;
