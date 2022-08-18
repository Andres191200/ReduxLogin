import { useEffect, useState } from 'react'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import FormWrapper from './components/FormWrapper';
import store from './store'
import useIsLogged from './customHooks/useIsLogged.jsx'
import MyUser from './components/MyUser';

function App() {
  const { logged, setLogged } = useIsLogged();
  const navigate = useNavigate();
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));

  useEffect(() => {
    logged && navigate('/myUser', { replace: true })
  }, [logged, setLogged])

  return (
    <Provider store={store}>
      <div className="App">

        <Routes>
          <Route exact path='/' element={userInfo ? <MyUser /> : <FormWrapper />} />
          <Route exact path='/myUser' element={userInfo ? <MyUser /> : <Navigate to="/" replace />} />
          <Route path="*" element={userInfo ? <Navigate to="/myUser" replace /> : <Navigate to="/" replace />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
