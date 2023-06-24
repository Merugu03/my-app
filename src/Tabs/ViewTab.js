import React, { useState, useEffect } from 'react';

const ViewTab = ({ images, setImages }) => {
  useEffect(() => {
    fetchImageUrls();
  }, []);

  const fetchImageUrls = async () => {
    const cloudName = 'doge4gpgf';
    const apiKey = '968977261972498';
    const apiSecret = 'uik4v8UrKU3lyfIOJcKNEBtfq3s';

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?resource_type=image`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
        },
      });

      const data = await response.json();
      const imageUrls = data.resources.map((resource) => resource.secure_url);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };


  return (
    <div>
      <h3>View Images</h3>
      {images.length > 0 ? (
        <div>
          {images.map((image, index) => (
            <div key={index} className="mb-4">
              <img src={image} alt={`Image ${index + 1}`} className="img-thumbnail" />
              <a href={image} download={`Image ${index + 1}`}>
                Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

export default ViewTab;
