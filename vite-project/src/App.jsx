import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import FormWrapper from './components/FormWrapper';
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<FormWrapper />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
