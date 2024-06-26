import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    red: 0,
    green: 0,
    blue: 0
  });


  const [result, setResult] = useState("#FFFFFF");
  const [error, setError] = useState("");

  function decimalToHex(decimal) {
    return decimal.toString(16).padStart(2, '0');
  }
  function handleChange(e) {
    const { name, value } = e.target;
    const newValue = parseInt(value);
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: newValue };
      const newColor = "#" +
        decimalToHex(newFormData.red) +
        decimalToHex(newFormData.green) +
        decimalToHex(newFormData.blue);

      if (isNaN(newValue) || newValue < 0 || newValue > 255) {
        setResult("#FFFFFF");
        setError("Error");
      } else {
        const newColor = "#" + decimalToHex(newFormData.red) + decimalToHex(newFormData.green) + decimalToHex(newFormData.blue);
        setError("");
        setResult(newColor);
      }

      return newFormData;
    });
  }

  return (
    <div>
      <p>Color Code Generator</p>
      <form>
        <label>Red</label>
        <input type="number" name="red" value={formData.red} onChange={handleChange}></input>
        <label>Green</label>
        <input type="number" name="green" value={formData.green} onChange={handleChange}></input>
        <label>Blue</label>
        <input type="number" name="blue" value={formData.blue} onChange={handleChange}></input>
      </form>
      <p className='box' style={{ backgroundColor: result }}>{error}</p>
    </div>
  );
}

export default App;
