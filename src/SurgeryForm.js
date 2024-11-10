import React, { useState } from 'react';

const SurgeryForm = () => {
  const [data, setData] = useState({
    date_procedure: '',
    name_procedure: '',
    postOpDay: '',
    day1: '', day2: '', day3: '', day4: '', day5: '', day6: '', day7: '', day8: '', day9: '',
    day10: '', day11: '', day12: '', day13: '', day14: '', day15: '', day16_30: '', day31_60: '', day60_90: '',

    purulent_discharge: '',
    localized_pain: '',
    localized_swelling: '',
    fever: '',
    incision_deliberately_opened: '',
    spontaneous_dehiscence: '',
    abscess: '',
    microorganisms_seen: '',
    imaging_evidence: '',
    positive_culture: '',
    blood_culture_sent: '',
    physician_diagnosis: '',
    any_other: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Surgery Procedure Form</h2>

        {/* Input fields for date and name of the procedure */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            Date of Procedure:
            <input type="date" name="date_procedure" value={data.date_procedure} onChange={handleChange} style={inputStyle} />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Name of Procedure:
            <input type="text" name="name_procedure" value={data.name_procedure} onChange={handleChange} style={inputStyle} />
          </label>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Name of Procedure</th>
              <th style={tableHeaderStyle}>1</th>
              <th style={tableHeaderStyle}>2</th>
              <th style={tableHeaderStyle}>3</th>
              <th style={tableHeaderStyle}>4</th>
              <th style={tableHeaderStyle}>5</th>
              <th style={tableHeaderStyle}>6</th>
              <th style={tableHeaderStyle}>7</th>
              <th style={tableHeaderStyle}>8</th>
              <th style={tableHeaderStyle}>9</th>
              <th style={tableHeaderStyle}>10</th>
              <th style={tableHeaderStyle}>11</th>
              <th style={tableHeaderStyle}>12</th>
              <th style={tableHeaderStyle}>13</th>
              <th style={tableHeaderStyle}>14</th>
              <th style={tableHeaderStyle}>15</th>
              <th style={tableHeaderStyle}>16-30</th>
              <th style={tableHeaderStyle}>31-60</th>
              <th style={tableHeaderStyle}>60-90</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>Purulent Discharge from incision/wound</td>
              {generateRowInputs('purulent_discharge')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Localized Pain and tenderness</td>
              {generateRowInputs('localized_pain')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Localized Swelling</td>
              {generateRowInputs('localized_swelling')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Fever</td>
              {generateRowInputs('fever')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Incision deliberately opened / drained</td>
              {generateRowInputs('incision_deliberately_opened')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Spontaneous dehiscence of wound</td>
              {generateRowInputs('spontaneous_dehiscence')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Abscess</td>
              {generateRowInputs('abscess')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Micro-organisms seen in Gram's staining</td>
              {generateRowInputs('microorganisms_seen')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Imaging evidence of infection/abscess</td>
              {generateRowInputs('imaging_evidence')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Positive culture from discharge material</td>
              {generateRowInputs('positive_culture')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Blood culture sent</td>
              {generateRowInputs('blood_culture_sent')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Physician Institutes a Diagnosis of SSI</td>
              {generateRowInputs('physician_diagnosis')}
            </tr>
            <tr>
              <td style={tableCellStyle}>Any Other</td>
              {generateRowInputs('any_other')}
            </tr>
          </tbody>
        </table>

        <button type="submit" style={{ marginTop: '20px', padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Helper function to generate a row of input fields for each day
const generateRowInputs = (namePrefix) => {
  const days = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11', 'day12', 'day13', 'day14', 'day15', 'day16_30', 'day31_60', 'day60_90'];
  return days.map((day, index) => (
    <td key={index} style={tableCellStyle}>
      <input type="text" name={`${namePrefix}_${day}`} style={inputStyle} />
    </td>
  ));
};

// Inline styles for table elements
const tableHeaderStyle = {
  backgroundColor: '#ddd',
  padding: '10px',
  border: '1px solid #ccc',
  textAlign: 'center',
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #ccc',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

export default SurgeryForm;
