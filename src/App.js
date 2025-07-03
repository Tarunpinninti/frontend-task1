import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ✅ default import
import Sales from './pages/Sales';
import CalendarPage from './pages/CalendarPage';
import Tasks from './pages/Tasks';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
