import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav } from 'react-bootstrap';
import UploadTab from './UploadTab';
import ViewTab from './ViewTab';

const Tabs = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (uploadedImage) => {
    setImages([...images, uploadedImage]);
  };

  return (
    <div className="container mt-4">
      <Tab.Container defaultActiveKey="upload">
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="upload">Upload</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="view">View Images</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="text">Text</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="upload">
            <UploadTab onImageUpload={handleImageUpload} />
          </Tab.Pane>
          <Tab.Pane eventKey="view">
            <ViewTab images={images} />
          </Tab.Pane>
          <Tab.Pane eventKey="text">
            <p>Some text goes here...</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Tabs;
