import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage';
function App() {
  return (<>
    <div className="App">
   <Header/>
    </div>
    <main>
      <HomePage/>
    </main>
    </>
  );
}

export default App;
