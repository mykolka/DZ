import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Empty';
import About from './components/About/Empty';
import Help from './components/Help/Empty';
import Instancess from './components/Instances/Empty';
import Pairs from './components/Pairs/Empty';


 import { BrowserRouter, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
       <div className="App-wrapper"> 
        <Header />
        <main>
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/instancess" component={Instancess} />
         <Route path="/pairs" component={Pairs} />
         <Route path="/about" component={About} />
         <Route path="/help" component={Help} />
         <Route path="/contact" component={Contact} />
        
        </main>     
       
      </div>
      </BrowserRouter>
  );
}

export default App;
