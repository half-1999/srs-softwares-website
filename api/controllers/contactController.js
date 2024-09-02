// controllers/contactController.js
const axios = require('axios');
const sql = require('mssql');
require('dotenv').config();

// Email Used For recaptcha Admin technicalptac@gmail.com
const SECRET = process.env.RECAPTCHA_SECRET 

exports.submitContactForm = async (req, res) => {
  const { name, email, contact, company, service, message, city, recaptchaValue } = req.body;

  axios({url: `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET}&response=${recaptchaValue}`, 
        method: 'POST',
        })
        .then(async ({data}) => {
            if(data.success) {
                    const contactForm = await sql.query`Exec Dbo.InsertDataList ${name},${email},${contact},${company},${service},${message},${city}`;
                res.status(201).json(contactForm);
            } else {
                res.status(400).json({message: 'Recaptcha verification failed!'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: 'Failed to save contact information.'})
        })
};
