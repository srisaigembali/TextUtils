import React, { useState } from 'react';

const TextForm = (props) => {
  document.title = 'TextUtils - Home';

  const [text, setText] = useState('Enter your text here');

  const handleOnChange = (event) => {
    setText(event.target.value);
    localStorage.setItem('textutil', event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' && props.showAlert('Converted to Uppercase!', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' && props.showAlert('Converted to Lowercase!', 'success');
  };

  const handleCapitalize = () => {
    let words = text.split(' ');
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    let newText = newWords.join(' ');
    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' && props.showAlert('Capitalized successfully!', 'success');
  };

  const handleToggleCase = () => {
    let words = text.split(' ');
    let newText = words
      .map((word) => {
        let newWord = '';
        for (let i = 0; i < word.length; i++) {
          let char = word.charAt(i);
          if (char >= 'A' && char <= 'Z') {
            char = char.toLowerCase();
          } else if (char >= 'a' && char <= 'z') {
            char = char.toUpperCase();
          }
          newWord += char;
        }
        return newWord;
      })
      .join(' ');

    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' && props.showAlert('Case Toggled!', 'success');
  };

  const handleReplace = () => {
    let existing_text = prompt('Enter which word to replace: ');
    let replaced_text = prompt('Enter new word');
    let newText = text.replaceAll(existing_text, replaced_text);
    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' &&
      props.showAlert(
        `${existing_text} is replaced with ${replaced_text}`,
        'success'
      );
  };

  const handleClearClick = () => {
    setText('');
    text !== '' && props.showAlert('Text Cleared!', 'success');
  };

  const undo = () => {
    let itm = localStorage.getItem('textutil');
    setText(itm);
    text !== '' && props.showAlert('Text Retrieved!', 'success');
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    text !== '' && props.showAlert('Text copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    localStorage.setItem('textutil', newText);
    text !== '' && props.showAlert('Extra Spaces removed!', 'success');
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? '#042743' : 'white' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            style={{
              backgroundColor:
                props.mode === 'dark' ? 'rgb(108 170 232)' : 'white',
              color: props.mode === 'light' ? '#042743' : 'white',
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={handleLowClick}
        >
          Lowercase
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={handleCapitalize}
        >
          Capitalize
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={handleToggleCase}
        >
          Toggle Case
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={handleReplace}
        >
          Replace
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2`}
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
          onClick={undo}
        >
          Undo
        </button>
        <button
          onClick={speak}
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
        >
          Speak
        </button>
        <button
          onClick={handleCopy}
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
        >
          Copy
        </button>
        <button
          onClick={handleExtraSpaces}
          className={`btn btn-outline-${
            props.mode === 'light' ? 'dark' : 'light'
          } mx-2 my-1`}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? '#042743' : 'white' }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</b>{' '}
          Words and <b>{text.length}</b> Characters
        </p>
        <p>
          <b>
            {text === ''
              ? text
                  .trim()
                  .split('.')
                  .filter((text) => text !== '').length
              : text.split('.').length - 1}{' '}
          </b>
          No. of sentences
        </p>
        <p>
          <b>
            {0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)}
          </b>{' '}
          Minutes to read
        </p>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'light' ? '#042743' : 'white' }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter some text to preview it here.'}</p>
      </div>
    </>
  );
};

export default TextForm;
