import React, { useState } from "react";
//@ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp";
const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setResult(await addToMailchimp(email, {
        FNAME: fname,
        LNAME: lname
    }));
    console.log(result);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleFNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={fname} onChange={handleFNameChange} />
      <input type="text" placeholder="Last Name" value={lname} onChange={handleLNameChange} />
      <br />
      <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
      <br />
      <input type="submit" value="Stay Up to Date" />
    </form>
  );
};

export default EmailForm;
