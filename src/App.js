import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className='text-5xl text-center'>This is header</h2>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
