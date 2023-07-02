import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    // if (mode === 'dark') {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert('Light Mode is Enabled', 'success');
    // } else {
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#042743';
    //   showAlert('Dark Mode is Enabled', 'success');
    // }
    if (cls === 'light') {
      document.body.classList.remove('bg-light');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
    if (cls === 'dark') {
      document.body.classList.remove('bg-dark');
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark Mode is Enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter Your Text To Analyse Below"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
