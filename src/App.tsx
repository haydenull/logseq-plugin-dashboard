import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home/Index'
import './App.css'
import LogseqHead from './components/LogseqHead'

const App: React.FC<{
  env: string
}> = () => {
  return (
    <div>
      <LogseqHead />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App