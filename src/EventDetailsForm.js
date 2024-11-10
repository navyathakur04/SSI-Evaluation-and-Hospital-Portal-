import React, { useState } from 'react';

const EventDetailsForm = () => {
  const [event_details_form, set_event_details_form] = useState({
    specific_event: {
      sip: false,
      sis: false,
      dip: false,
      dis: false,
      organ_space: false, // Change to a boolean
      organ_space_text: '', // Add separate state for organ/space text
    },
    detected: {
      during_admission: false,
      post_discharge_surveillance: false,
      readmission_facility: false,
    },
    sample_type: '',
    secondary_bsi_contribution: '', // Field for Secondary BSI contribution
  });

  const handle_event_change = (e) => {
    const { name, value, type, checked } = e.target;
    set_event_details_form((prev) => ({
      ...prev,
      specific_event: {
        ...prev.specific_event,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  const handle_organ_space_text_change = (e) => {
    set_event_details_form((prev) => ({
      ...prev,
      specific_event: {
        ...prev.specific_event,
        organ_space_text: e.target.value,
      },
    }));
  };

  const handle_detected_change = (e) => {
    const { name, checked } = e.target;
    set_event_details_form((prev) => ({
      ...prev,
      detected: { ...prev.detected, [name]: checked },
    }));
  };

  const handle_sample_type_change = (e) => {
    set_event_details_form((prev) => ({
      ...prev,
      sample_type: e.target.value,
    }));
  };

  const handle_secondary_bsi_change = (e) => {
    set_event_details_form((prev) => ({
      ...prev,
      secondary_bsi_contribution: e.target.value,
    }));
  };

  return (
    <form style={styles.event_details_form}>
      <h2 style={styles.heading}>Event Details Form</h2>

      <h3 style={styles.subheading}>Specific Event:</h3>
      <div style={styles.form_row}>
        <label>
          <input
            type="checkbox"
            name="sip"
            checked={event_details_form.specific_event.sip}
            onChange={handle_event_change}
          />
          Superficial Incisional Primary (SIP)
        </label>
        <label>
          <input
            type="checkbox"
            name="sis"
            checked={event_details_form.specific_event.sis}
            onChange={handle_event_change}
          />
          Superficial Incisional Secondary (SIS)
        </label>
        <label>
          <input
            type="checkbox"
            name="dip"
            checked={event_details_form.specific_event.dip}
            onChange={handle_event_change}
          />
          Deep Incisional Primary (DIP)
        </label>
        <label>
          <input
            type="checkbox"
            name="dis"
            checked={event_details_form.specific_event.dis}
            onChange={handle_event_change}
          />
          Deep Incisional Secondary (DIS)
        </label>
        <label>
          <input
            type="checkbox"
            name="organ_space"
            checked={event_details_form.specific_event.organ_space}
            onChange={handle_event_change}
          />
          Organ/Space(specific site)
        </label>
        {event_details_form.specific_event.organ_space && (
          <input
            type="text"
            name="organ_space_text"
            value={event_details_form.specific_event.organ_space_text}
            onChange={handle_organ_space_text_change}
            placeholder="Specify organ/space"
            style={styles.form_input}
          />
        )}
      </div>

      <h3 style={styles.subheading}>Detected:</h3>
      <div style={styles.form_row}>
        <label>
          <input
            type="checkbox"
            name="during_admission"
            checked={event_details_form.detected.during_admission}
            onChange={handle_detected_change}
          />
          A (During admission)
        </label>
        <label>
          <input
            type="checkbox"
            name="post_discharge_surveillance"
            checked={event_details_form.detected.post_discharge_surveillance}
            onChange={handle_detected_change}
          />
          P (Post-discharge surveillance)
        </label>
        <label>
          <input
            type="checkbox"
            name="readmission_facility"
            checked={event_details_form.detected.readmission_facility}
            onChange={handle_detected_change}
          />
          RF (Readmission to facility where procedure performed)
        </label>
      </div>

      {/* Dropdown for Sample Types */}
      <div style={styles.form_row}>
        <label style={styles.label}>Sample Type:</label>
        <select
          name="sample_type"
          value={event_details_form.sample_type}
          onChange={handle_sample_type_change}
          style={styles.form_input}
        >
          <option value="">Select Sample Type</option>
          <option value="PUS SWAB">PUS SWAB</option>
          <option value="PUS">PUS</option>
          <option value="TISSUE">TISSUE</option>
          <option value="DRAIN FLUID">DRAIN FLUID</option>
          <option value="ASCITIC FLUID">ASCITIC FLUID</option>
          <option value="BILE FLUID">BILE FLUID</option>
          <option value="OTHERS">OTHERS</option>
        </select>
      </div>

      {/* Secondary BSI Contribution */}
      <div style={styles.form_row}>
        <label style={styles.label}>Whether Secondary BSI contributed to the death of the patient:</label>
        <label>
          <input
            type="radio"
            name="secondary_bsi_contribution"
            value="yes"
            checked={event_details_form.secondary_bsi_contribution === 'yes'}
            onChange={handle_secondary_bsi_change}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="secondary_bsi_contribution"
            value="no"
            checked={event_details_form.secondary_bsi_contribution === 'no'}
            onChange={handle_secondary_bsi_change}
          />
          No
        </label>
      </div>

      <button type="submit" style={{ marginTop: '20px', padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
    </form>
  );
};

const styles = {
  event_details_form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  subheading: {
    color: '#444',
    marginBottom: '15px',
  },
  form_row: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  form_input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  submit_button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default EventDetailsForm;
