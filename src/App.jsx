import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/quiz';

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  
    
  )
}

export default App