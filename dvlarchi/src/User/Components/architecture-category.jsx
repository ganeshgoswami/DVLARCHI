// ArchitectureCategory.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // ⬅️ Import useParams
import axios from "axios";

const ArchitectureType = () => {
  const { architecturetype } = useParams(); // ⬅️ Get category from URL param
  console.log(architecturetype)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(data)
  useEffect(() => {
  

    fetchCategoryData();
  }, [architecturetype]);

    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/architecturecategory/${architecturetype}`);
        if (response.data.statusCode === 200) {
          setData(response.data.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="category-container">
      <h1 className="text-success" >{architecturetype} Projects</h1>
      <hr />
      {data.length === 0 ? (
        <p>No items found in this Architecture Type.</p>
      ) : (
        <div className="card-grid">
          {data.map((item) => (
            <Link className="card text-decoration-none" to={`/image-gallery/${item._id}`}  key={item._id}>
              <img
                src={`http://localhost:5000/images/uploads/${item.images[0]}`}
                alt={item.category}
                className="card-image"
              />
              
              <div className="card-content">
                <h3 className="text-info">{item.category}</h3>
                <p> <b>Address</b>  : {item.address}</p>
                <p> <b>Description</b> :  {item.desc?.slice(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureType;
