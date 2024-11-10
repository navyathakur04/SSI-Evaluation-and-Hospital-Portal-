import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import MainPage from './MainPage'; 
import NursePage from './NursePage'; 
import SurveillanceForm from './SurveillanceForm'; 
import SurgeryForm from './SurgeryForm'; 
import AntibioticForm from './AntibioticForm'; 
import MicrobiologyForm from './MicrobiologyForm'; 
import EventDetailsForm from './EventDetailsForm';
import SSIEvaluationForm from './SSIEvaluationForm';
import JuniorDoctor from './JuniorDoctor'; // Import JuniorDoctor component
import SeniorDoctorPage from './SeniorDoctorPage'; // Import SeniorDoctorPage component

// Not Found Component
const NotFound = () => <h2>Page Not Found</h2>;

const App = () => {
  return (
    <Router> {/* Add Router here */}
      <Routes>
        {/* Main Page Route */}
        <Route path="/" element={<MainPage />} />
        
        {/* Nurse Page with options to choose different forms */}
        <Route path="/nurse" element={<NursePage />} />
        
        {/* Form Routes */}
        <Route path="/surveillance-form" element={<SurveillanceForm />} />
        <Route path="/surgery-form" element={<SurgeryForm />} />
        <Route path="/antibiotic-form" element={<AntibioticForm />} />
        <Route path="/microbiology-form" element={<MicrobiologyForm />} />
        <Route path="/event-details-form" element={<EventDetailsForm />} />
        <Route path="/ssi-evaluation" element={<SSIEvaluationForm />} />

        {/* Junior Doctor Route */}
        <Route path="/junior-doctor" element={<JuniorDoctor />} /> {/* Route for JuniorDoctor */}

        {/* Senior Doctor Route */}
        <Route path="/senior-doctor" element={<SeniorDoctorPage />} /> {/* Route for SeniorDoctorPage */}

        {/* Fallback Route for unknown pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
