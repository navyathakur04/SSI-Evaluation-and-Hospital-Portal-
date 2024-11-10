import React, { useState } from 'react';

function MicrobiologyForm() {
  const [formData, setFormData] = useState({
    micro_organism: '',
    antibiotic_data: [], // Holds antibiotic data with MIC and interpretation
    secondary_bsi_contribution: ''
  });

  // List of microorganisms
  const micro_organisms = [
    "E.COLI",
    "KLEBSIELLA PNEUMONIAE",
    "ENTEROCOCCUS FAECIUM",
    "ENTEROCOCCUS FAECALIS",
    "STAPHYLOCOCCUS HAEMOLYTICUS",
    "SKIN COMMENSAL FLORA",
    "PSEUDOMONAS AERUGINOSA",
    "STAPHYLOCOCCUS AUREUS (MRSA)",
    "STAPHYLOCOCCUS AUREUS (MSSA)",
    "CONS",
    "ACINETOBACTER BAUMANII",
    "CITROBACTER KOSERI",
    "CITROBACTER FREUNDII",
    "ENTEROBACTER CLOACAE",
    "ENTEROBACTER AEROGENES",
    "PROTEUS MIRABILIS",
    "MORGANELLA MORGANII",
    "Others"
  ];

  // List of antibiotics
  const antibiotic_data = [
    "Amoxicillin-clavulanic acid", "Amikacin", "Aztreonam", "Cefepime",
    "Ceftazidime", "Ceftriaxone", "Netilmicin", "Meropenem", "Imipenem","Levofloxacin",
    "Norfloxacin", "Ciprofloxacin", "Cefoperazone/Sulbactum", 
    "Ticarcillin/Clavulanic acid", "Piperacillin-tazobactum", 
    "Ceftazidime/Avibactam", "Penicillin", "Oxacillin", "Gentamicin", 
    "Tetracycline", "Clindamycin", "Vancomycin E STRIP", "Linezolid", 
    "Teicoplanin", "Nitrofurantoin", "Erythromycin", "Cefoxitin", 
    "Co-trimoxazole","Netilmicin","Ertapenem", "Chloramphenicol", "Fosfomycin", "Colistin E STRIP","Cefuroxime"
  ];

  // Initialize antibiotic data structure if not initialized yet
  if (formData.antibiotic_data.length === 0) {
    setFormData({
      ...formData,
      antibiotic_data: antibiotic_data.map((antibiotic) => ({
        name: antibiotic,
        mic: '',
        interpretation: ''
      }))
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAntibioticChange = (index, field, value) => {
    const updatedAntibioticData = [...formData.antibiotic_data];
    updatedAntibioticData[index] = {
      ...updatedAntibioticData[index],
      [field]: value
    };
    setFormData({
      ...formData,
      antibiotic_data: updatedAntibioticData
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <h2>Microbiology Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Micro-organism dropdown */}
        <div style={styles.formGroup}>
          <label htmlFor="micro_organism" style={styles.label}>Micro-organism implicated for SSI event:</label>
          <select
            id="micro_organism"
            name="micro_organism"
            value={formData.micro_organism}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="">Select a Micro-organism</option>
            {micro_organisms.map((organism, index) => (
              <option key={index} value={organism}>
                {organism}
              </option>
            ))}
          </select>
        </div>

        {/* Antibiotic Susceptibility Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Antibiotic</th>
              <th style={styles.th}>MIC</th>
              <th style={styles.th}>Interpretation</th>

            </tr>
          </thead>
          <tbody>
            {formData.antibiotic_data.map((antibiotic, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{antibiotic.name}</td>
                <td style={styles.td}>
                  <input
                    type="text"
                    value={antibiotic.mic}
                    onChange={(e) => handleAntibioticChange(index, 'mic', e.target.value)}
                    style={styles.micInput}
                  />
                </td>
                <td style={styles.td}>
                  <select
                    value={antibiotic.interpretation}
                    onChange={(e) => handleAntibioticChange(index, 'interpretation', e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Select Interpretation</option>
                    <option value="Resistant">Resistant</option>
                    <option value="Sensitive">Sensitive</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Susceptibility Dose Dependent">Susceptibility Dose Dependent</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit" style={{ marginTop: '20px', padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    fontWeight: 'bold',
    display: 'inline-block',
    marginRight: '10px',
    width: '250px'
  },
  select: {
    width: '100%',
    padding: '5px'
  },
  micInput: {
    width: '60px',
    padding: '5px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px'
  },
  th: {
    border: '1px solid #000',
    padding: '10px',
    textAlign: 'center'
  },
  td: {
    border: '1px solid #000',
    padding: '10px',
    textAlign: 'center'
  },
  tr: {
    borderBottom: '1px solid #ddd'
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '10px'
  }
};

export default MicrobiologyForm;
