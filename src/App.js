import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import MyChart from './components/MyChart/MyChart';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <HomePage></HomePage>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={
          <RequireAuth>
            <Reviews></Reviews>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <MyChart></MyChart>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
