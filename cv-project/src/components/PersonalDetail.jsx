import InputGroup from './InputGroup';

const Personal = ({ onPersonalDetailChange }) => {
  
  const handleInputChange = (e, field) => {
    onPersonalDetailChange(field, e.target.value);
  };

  return (
    <>
      <div className="personal-detail">
        <h2>Personal Details</h2>

        <InputGroup
          id="name"
          type="text"
          labelText="Full Name"
          name="fullName"
          placeholder="Enter Full Name"
          onChange={(e) => handleInputChange(e, "fullName")}
        />

        <InputGroup
          id="email"
          type="email"
          labelText="E-mail"
          name="email"
          placeholder="Enter email"
          onChange={(e) => handleInputChange(e, "email")}
        />

        <InputGroup
          id="phone-number"
          type="text"
          placeholder="Enter your number"
          name="phoneNumber"
          labelText="Phone Number"
          onChange={(e) => handleInputChange(e, "phoneNumber")}
        />

        <InputGroup
          id="address"
          type="text"
          placeholder="Enter your address"
          name="address"
          labelText="Address"
          onChange={(e) => handleInputChange(e, "address")}
        />
      </div>
    </>
  );
};

export default Personal;
