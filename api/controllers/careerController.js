// controllers/careerController.js
const sql = require('mssql');
require('dotenv').config();

exports.submitCareerForm = async (req, res) => {
  const {
    companyName, currentAddress, currentSalary, designation, dob, emailID, 
    expectedSalary, facebookLink, gender, instagramLink, linkedInLink,  mobileNo, name, permanentAddress, position, 
    reasonForLeaving, resumeLink, totalExperience, profilePicLink  
  } = req.body;

  try {
      // Insert data into SQL database
      const result = await sql.query`
        EXEC Dbo.InsertCareerForm 
          ${position},
          ${name},
          ${mobileNo},
          ${emailID},
          ${dob},
          ${permanentAddress},
          ${currentAddress},
          ${companyName},
          ${designation},
          ${gender},
          ${currentSalary},
          ${expectedSalary},
          ${reasonForLeaving},
          ${resumeLink},
          ${facebookLink},
          ${instagramLink},
          ${profilePicLink},
          ${linkedInLink},
          ${totalExperience}
      `;
      res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save career information.' });
  }
};

exports.currentPositions = async (req, res) => {
  try {
      // Insert data into SQL database
      const result = await sql.query`
        SELECT * FROM CandidatePost ORDER BY PostName
      `;
      res.status(201).json(result.recordsets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save career information.' });
  }
};