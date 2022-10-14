import { Routes, Route } from 'react-router-dom';
import Splash from './components/pages/splash';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
