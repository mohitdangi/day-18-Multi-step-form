import React, { useState } from 'react';
import './box.css'; // Import CSS file for styling

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
    },
    contactInfo: {
      phoneNumber: '',
      address: '',
    },
    additionalInfo: {
      age: '',
      gender: '',
    },
    step: 1,
  });

  const handleInputChange = (e, stepName) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [stepName]: {
        ...formData[stepName],
        [name]: value,
      },
    });
  };

  const nextStep = () => {
    setFormData({
      ...formData,
      step: formData.step + 1,
    });
  };

  const prevStep = () => {
    setFormData({
      ...formData,
      step: formData.step - 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="multistep-form">
      <form onSubmit={handleSubmit}>
        {formData.step === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <input type="text" name="name" placeholder="Name" value={formData.personalInfo.name} onChange={(e) => handleInputChange(e, 'personalInfo')} />
            <input type="email" name="email" placeholder="Email" value={formData.personalInfo.email} onChange={(e) => handleInputChange(e, 'personalInfo')} />
            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {formData.step === 2 && (
          <div>
            <h2>Step 2: Contact Information</h2>
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.contactInfo.phoneNumber} onChange={(e) => handleInputChange(e, 'contactInfo')} />
            <input type="text" name="address" placeholder="Address" value={formData.contactInfo.address} onChange={(e) => handleInputChange(e, 'contactInfo')} />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {formData.step === 3 && (
          <div>
            <h2>Step 3: Additional Information</h2>
            <input type="text" name="age" placeholder="Age" value={formData.additionalInfo.age} onChange={(e) => handleInputChange(e, 'additionalInfo')} />
            <input type="text" name="gender" placeholder="Gender" value={formData.additionalInfo.gender} onChange={(e) => handleInputChange(e, 'additionalInfo')} />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {formData.step === 4 && (
          <div>
            <h2>Step 4: Confirmation</h2>
            <p>Name: {formData.personalInfo.name}</p>
            <p>Email: {formData.personalInfo.email}</p>
            <p>Phone Number: {formData.contactInfo.phoneNumber}</p>
            <p>Address: {formData.contactInfo.address}</p>
            <p>Age: {formData.additionalInfo.age}</p>
            <p>Gender: {formData.additionalInfo.gender}</p>
            <button onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
