import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import MyChart from './components/MyChart/MyChart';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<MyChart></MyChart>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
