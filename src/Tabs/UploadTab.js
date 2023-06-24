import React, { useState } from 'react';
import axios from 'axios';

const UploadTab = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);
      formData.append('upload_preset', 'image_upload'); // Replace 'your_upload_preset' with your Cloudinary upload preset

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/doge4gpgf/image/upload`,
          formData
        );
        const { secure_url } = response.data;
        onImageUpload(secure_url);
        setUploadMessage('Upload successful!');
      } catch (error) {
        console.error('Upload failed:', error);
        setUploadMessage('Upload failed!');
      }
    }
  };

  return (
    <div>
      <h3>Upload an Image</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
      <p>{uploadMessage}</p>
    </div>
  );
};

export default UploadTab;
