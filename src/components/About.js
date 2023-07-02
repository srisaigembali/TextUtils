import React, { useState } from 'react';

const About = () => {
  let dark = {
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid white',
  };

  let light = {
    color: 'black',
    backgroundColor: 'white',
  };

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const handleMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle(dark);
      setBtnText('Enable Light Mode');
    } else {
      setMyStyle(light);
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="pt-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About The App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Text Utils app is a powerful tool designed to assist users in
              manipulating and processing text-based data efficiently. It offers
              a wide range of features and functionalities to simplify various
              text-related tasks.{' '}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              About Me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Full Stack Developer
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              My profile
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <a href="https://srisaigembali.github.io/portfolio/">
                My profile
              </a>{' '}
              Click on the link to know more about me
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <button className="btn btn-primary" onClick={handleMode}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default About;
