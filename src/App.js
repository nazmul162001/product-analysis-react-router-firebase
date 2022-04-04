import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import MyChart from './components/MyChart/MyChart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/:reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<MyChart></MyChart>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
