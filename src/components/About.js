import React from 'react';

const About = (props) => {
  document.title = 'TextUtils - About';

  const light = {
    color: '#042743',
    backgroundColor: 'white',
  };

  const dark = {
    color: 'white',
    backgroundColor: '#042743',
  };

  return (
    <div className="container my-3 p-3">
      <h1 style={props.mode === 'light' ? light : dark}>About Us</h1>
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
              style={{
                backgroundColor:
                  props.mode === 'dark' ? 'rgb(108 170 232)' : 'white',
              }}
            >
              <strong>Analyse the text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.mode === 'light' ? light : dark}
            >
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
              style={{
                backgroundColor:
                  props.mode === 'dark' ? 'rgb(108 170 232)' : 'white',
              }}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.mode === 'light' ? light : dark}
            >
              TextUtils app is free to use made using react js.
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
              style={{
                backgroundColor:
                  props.mode === 'dark' ? 'rgb(108 170 232)' : 'white',
              }}
            >
              <strong>My profile</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={props.mode === 'light' ? light : dark}
            >
              <a href="https://srisaigembali.github.io/portfolio/">
                My profile
              </a>{' '}
              Click on the link to know more about me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
