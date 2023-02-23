import React, { useState, useEffect } from "react";
import "./styles.css";

interface Image {
  id: number;
  webformatURL: string;
}

const ImageSearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    if (searchTerm !== "") {
      fetch(`https://pixabay.com/api/?key=33849339-fb93602f42ff2f00b7e52abb3&q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setImages(data.hits));
    } else {
      setImages([]);
    }
  }, [searchTerm]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (id: number) => {
    // toDO
  }

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search images"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {images.length > 0 && (
        <ul className="image-list">
          {images.map((image) => (
            <li key={image.id}>
              <img
                className="image"
                src={image.webformatURL}
                alt="Image"
                onClick={() => handleImageClick(image.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageSearchScreen;
