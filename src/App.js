import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UserLists from './components/UserLists';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/user'>User</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<UserLists />} />
            <Route path='/user/add' element={<AddUser />} />
            <Route path='/user/edit/:code' element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer className="toast-position" 
        position='bottom-right'></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;

