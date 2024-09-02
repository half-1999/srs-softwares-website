import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
// formConfig.js

const CareerPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, setValue } = useForm({
    defaultValues: {
      totalExperience: 0,
    },
  });
  const [positions, setPositions] = useState([]); 

  // Fetch positions from API
useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.post('http://api.srssoftwares.in/website/api/career/positions'); // Replace with your API endpoint
        const result = response.data.flat(); // Flatten the array if necessary
        setPositions(result.map(position => position.PostName)); 
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };
    fetchPositions();
  }, []);


  const formConfig = {
  personalDetails: [
{
      id: 'position',
      label: 'Position (Applying for)',
      type: 'select',
      options: positions,
      // placeholder: 'Enter the Position you applying for',
      validation: { required: 'Position is required' }
    },
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your Full name', validation: { required: 'Name is required' } },
    { id: 'mobileNo', label: 'Mobile No', type: 'tel', placeholder: 'Enter your mobile number', validation: { required: 'Mobile number is required', pattern: { value: /^\d{10}$/, message: 'Mobile number must be 10 digits' } } },
    { id: 'emailID', label: 'Email ID', type: 'email', placeholder: 'Enter your email address' },
    { id: 'dob', label: 'DOB', type: 'date', placeholder: 'Enter your date of birth' },
    { id: 'gender', label: 'Gender', type: 'select', options: ['Select Gender', 'Male', 'Female', 'Others'], placeholder: 'Select your gender', validation: { required: 'Gender is required' } },
    { id: 'currentAddress', label: 'Current Address', type: 'text', placeholder: 'Enter your current address', validation: { required: 'Current Address is required' } },
    { id: 'permanentAddress', label: 'Permanent Address', type: 'text', placeholder: 'Enter your permanent address' },
    { id: 'profilePicLink', label: 'Profile Pic Link', type: 'text', placeholder: 'Paste the link to your profile pic'},
    { id: 'resumeLink', label: 'Resume Link', type: 'text', placeholder: 'Paste the link to your resume', validation: { required: 'Resume is required' } },
    { id: 'facebookLink', label: 'Facebook Link', type: 'text', placeholder: 'Paste the link to your Facebook profile' },
    { id: 'instagramLink', label: 'Instagram Link', type: 'text', placeholder: 'Paste the link to your Insta profile' },
    { id: 'linkedInLink', label: 'LinkedIn Link', type: 'text', placeholder: 'Paste the link to your LinkedIn profile' },
  ],
  previousExperienceIf: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter your last company name' },
    { id: 'designation', label: 'Designation', type: 'text', placeholder: 'Enter your designation at the last company' },
    { id: 'totalExperience', label: 'Total Experience ', type: 'number', placeholder: 'Enter your total experience in years' },
    { id: 'reasonForLeaving', label: 'Reason for Leaving', type: 'text', placeholder: 'Enter the reason for leaving your last job' },
    { id: 'currentSalary', label: 'Current Salary', type: 'number', placeholder: 'Enter your current salary' },
    { id: 'expectedSalary', label: 'Expected Salary', type: 'number', placeholder: 'Enter your expected salary' },
  ],
  };

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);
    // API Endpoint
    try {
      await axios.post('http://api.srssoftwares.in/website/api/career/submit', data); 
      alert('Form submitted successfully!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const renderField = (field) => {
    const commonProps = {
      ...register(field.id, field.validation),
      className: 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
      placeholder: field.placeholder || '',

    };
    
    switch (field.type) {
      case 'select':
        return (
          <select id={field.id} {...commonProps}>
            {field.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      default:
        return (
          <input id={field.id} type={field.type} {...commonProps} />
        );
    }
  };

  return (
    <div className="container mx-auto flex gap-2 w-full">
      <div className="grid gap-2 mb-2 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-2 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Apply Now</h2>
          {Object.entries(formConfig).map(([sectionKey, fields]) => (
            <div key={sectionKey}>
              <h1 className='text-md font-semibold mb-2 bg-gray-200 p-2 rounded-lg'>{sectionKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</h1>
              <div className='grid grid-cols-2 gap-2'>
                {fields.map(field => (
                  <div key={field.id} className="mb-4">
                    <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700">{field.label}</label>
                    {renderField(field)}
                    {errors[field.id] && <p className="text-red-600">{errors[field.id].message}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className='flex justify-end'>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default CareerPage;
