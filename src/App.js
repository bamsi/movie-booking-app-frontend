import { Routes, Route } from 'react-router-dom';
import Splash from './components/pages/splash';
import Login from './components/pages/login';

function App() {
  return (
    <div className="container-fluid px-0">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
