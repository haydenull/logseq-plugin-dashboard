import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home/Index'
import './App.css'

const App: React.FC<{
  env: string
}> = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App