import React, { useState, useEffect } from "react";

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
}

const ImageSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=33849339-fb93602f42ff2f00b7e52abb3&q=${searchTerm}`
      );
      const data = await response.json();
      setImages(data.hits);
    };
    fetchImages();
  }, [searchTerm]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (id: number) => {
    // implement later 
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <ul>
        {images.map((image) => (
          <li key={image.id} onClick={() => handleImageClick(image.id)}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageSearch;
