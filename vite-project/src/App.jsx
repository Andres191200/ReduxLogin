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

  useEffect(() => {
    logged && navigate('/myUser', { replace: true })
  }, [logged, setLogged])

  return (
    <Provider store={store}>
      <div className="App">

        <Routes>
          <Route exact path='/' element={<FormWrapper />} />
          <Route exact path='/myUser' element={<MyUser />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
