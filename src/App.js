import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Login from './Components/Login';

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
