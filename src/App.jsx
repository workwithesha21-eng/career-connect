
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import JobDetails from './pages/JobDetails.jsx';
import Apply from './pages/Apply.jsx';
import MyApplications from './pages/MyApplications.jsx';

import SavedJobs from './pages/SavedJobs.jsx';
import Companies from './pages/Companies.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<Apply />} />

        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;






