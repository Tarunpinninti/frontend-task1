// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import CalendarPage from "./pages/CalendarPage";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login"; // ✅ Import Login Page
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 Login Page (standalone, no sidebar) */}
        <Route path="/" element={<Login />} />

        {/* 📊 Dashboard Pages (wrapped in layout) */}
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route path="homepage" element={<Home />} />
                <Route path="sales" element={<Sales />} />
              </Routes>
            </DashboardLayout>
          }
        />

        {/* 🗓 Leads and Cases (also wrapped in layout) */}
        <Route
          path="/leads/calendar"
          element={
            <DashboardLayout>
              <CalendarPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/cases/activities/tasks"
          element={
            <DashboardLayout>
              <Tasks />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;