import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

interface Image {
  id: number;
  webformatURL: string;
  user: string;
  tags: string;
}

const ImageDetailScreen = () => {
  const { id } = useParams();
  const [image, setImage] = useState<Image | null>(null);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=33849339-fb93602f42ff2f00b7e52abb3&id=${id}`)
      .then((response) => response.json())
      .then((data) => setImage(data.hits[0]));
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <img className="image" src={image.webformatURL} alt="Image" />
      <div className="details">
        <div className="detail">
          <span className="label">User:</span>
          <span className="value">{image.user}</span>
        </div>
        <div className="detail">
          <span className="label">Tags:</span>
          <span className="value">{image.tags}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailScreen;
