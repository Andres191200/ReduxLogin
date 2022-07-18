import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/views/LogIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
