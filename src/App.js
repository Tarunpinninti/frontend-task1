// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import CalendarPage from "./pages/CalendarPage";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter basename="/frontend-task1">
      <Routes>
        {/* 🔐 Login Page (standalone) */}
        <Route path="/" element={<Login />} />

        {/* 📊 Dashboard Pages */}
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

        {/* 🗓 Calendar and Tasks */}
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
    </BrowserRouter>
  );
}

export default App;