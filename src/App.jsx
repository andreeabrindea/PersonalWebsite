import './App.css'
import About from './About'
import Experience from './components/Experience';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App;