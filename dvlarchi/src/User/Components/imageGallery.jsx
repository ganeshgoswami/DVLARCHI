import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ImageGallery = () => {
  const {id} = useParams()
  const [imagesGallery, setImageGallery] = useState(null);

  useEffect(()=>{
    handleSearch()
  },[])

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/architectureSearchId/${id}`);
      setImageGallery(res.data.data);
    } catch (err) {
      console.error("Error fetching architecture:", err);
      setImageGallery(null);
    
    }
  };

  return (
    <div className="container my-4">
 

      {imagesGallery && (
        <div className="mt-4">
          <h4>{imagesGallery.formType} - {imagesGallery.category}</h4>
          <hr />
          {imagesGallery.images && imagesGallery.images.length > 0 ? (
            imagesGallery.images.map((img, index) => (
              <div className="row mb-3" key={index}>
                <div className="col-12">
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No images found.</p>
          )}
        </div>
      )}
    </div>
  );
};



export default ImageGallery;
