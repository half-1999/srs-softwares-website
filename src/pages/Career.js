import React, { useState } from 'react';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    mobileNo: '',
    emailID: '',
    dob: '',
    presentAddress: '',
    permanentAddress: '',
    companyName: '',
    currentPosition: '',
    currentSalary: '',
    expectedSalary:'',
    joiningDate: '',
    reasonForLeaving: '',
    noticePeriod: '',
    resumeLink: '',
    profilePicLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4 flex gap-2 w-full">
      <div className="grid gap-2 mb-2 w-full">
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
          <h1 className='text-lg font-semibold mb-4 bg-gray-200 p-2 rounded-lg'>Your Profile</h1>
          <div className='grid grid-cols-2 gap-2'>
            <div className="mb-4">
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position (Applying for)</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2'>
            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="emailID" className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                id="emailID"
                name="emailID"
                value={formData.emailID}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">DOB</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className="mb-4">
              <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-700">Present Address</label>
              <input
                type="text"
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700">Permanent Address</label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
<div className="mb-4">
            <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link</label>
            <input
              type="text"
              id="resumeLink"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profilePicLink" className="block text-sm font-medium text-gray-700">Profile Pic Link</label>
            <input
              type="text"
              id="profilePicLink"
              name="profilePicLink"
              value={formData.profilePicLink}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <h1 className='text-lg font-semibold mb-4 bg-gray-200 p-2 rounded-lg'>Last Company Profile</h1>
          <div className='grid grid-cols-4 gap-2'>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700">Current Working Position</label>
              <input
                type="text"
                id="currentPosition"
                name="currentPosition"
                value={formData.currentPosition}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="currentSalary" className="block text-sm font-medium text-gray-700">Current Salary</label>
              <input
                type="text"
                id="currentSalary"
                name="currentSalary"
                value={formData.currentSalary}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700">Expected Salary</label>
              <input
                type="text"
                id="expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className="mb-4">
              <label htmlFor="reasonForLeaving" className="block text-sm font-medium text-gray-700">Reason for Leaving</label>
              <input
                type="text"
                id="reasonForLeaving"
                name="reasonForLeaving"
                value={formData.reasonForLeaving}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700">Notice Period</label>
              <input
                type="text"
                id="noticePeriod"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerPage;
