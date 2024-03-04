import React, { useState } from 'react';

const DownloadButton = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const fetchFile = () => {
    const filePath = './src/assets/Personal/Divyansh_Arora_Resume.pdf';
    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Divyansh_Arora_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  };
  const handleClick = () => {
    fetchFile();
  };
  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download Resume
      </button>
    </div>
  );
};

export default DownloadButton;
