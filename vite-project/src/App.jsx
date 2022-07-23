import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormWrapper from './components/FormWrapper';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<FormWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
