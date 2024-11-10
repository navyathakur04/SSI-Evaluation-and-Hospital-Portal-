import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NursePage.css';
import logo from './logo.png'; // Ensure you have the logo.png in your project

const patients = [
  { id: 'P001', name: 'John Doe' },
  { id: 'P002', name: 'Jane Smith' },
  { id: 'P003', name: 'Michael Johnson' },
];

const NursePage = () => {
  const [expandedPatientId, setExpandedPatientId] = useState(null);
  const navigate = useNavigate();

  const togglePatientCard = (patientId) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId);
  };

  const formOptions = [
    { path: '/surveillance-form', label: 'Administration Details' },
    { path: '/surgery-form', label: 'Surgery Details' },
    { path: '/antibiotic-form', label: 'Antibiotic Details' },
    { path: '/microbiology-form', label: 'Microbiology Details' },
    { path: '/event-details-form', label: 'Event Details' },
    { path: '/ssi-evaluation', label: 'SSI Evaluation' },
  ];

  return (
    <div className="nurse-page">
      {/* Taskbar Section */}
      <div className="taskbar">
        <div className="logo-container">
          <img src={logo} alt="Nurse Portal Logo" className="logo" />
          <h1 className="hospital-name">Nurse Portal</h1>
        </div>
      </div>

      {/* Main Content */}
      <h1 className="page-title"></h1>
      <p className="intro-text">Click on a patient to open their forms:</p>

      <div className="patient-cards-container">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`patient-card ${expandedPatientId === patient.id ? 'expanded' : ''}`}
            onClick={() => togglePatientCard(patient.id)}
          >
            <h2>{patient.name}</h2>
            <p>ID: {patient.id}</p>
            {expandedPatientId === patient.id && (
              <div className="form-buttons">
                {formOptions.map((option) => (
                  <button
                    key={option.path}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card collapse when clicking button
                      navigate(option.path);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NursePage;
