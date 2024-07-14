import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [groupFile, setGroupFile] = useState(null);
  const [hostelFile, setHostelFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('group_file', groupFile);
    formData.append('hostel_file', hostelFile);

    const response = await axios.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    setResults(response.data);
  };

  const handleDownload = () => {
    const blob = new Blob([results], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'room_allocation.csv';
    a.click();
  };

  return (
    <div>
      <input type="file" onChange={(e) => setGroupFile(e.target.files[0])} />
      <input type="file" onChange={(e) => setHostelFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload and Allocate</button>
      {results && <button onClick={handleDownload}>Download Results</button>}
      {results && (
        <table>
          {/* Render results in a table */}
        </table>
      )}
    </div>
  );
}

export default App;
