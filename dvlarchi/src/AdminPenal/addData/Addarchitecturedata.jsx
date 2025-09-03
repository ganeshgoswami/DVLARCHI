import React, { useState } from "react";
import axios from "axios";

const AddArchitectureData = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    formType: "Architecture",
    category: "",
    address: "",
    desc: "",
    Area: "",
    status: "",
  });

  const categoryOptions = [
    "Cafe",
    "Commercial",
    "Residential",
    "Landscape",
    "Community",
    "Hotel",
    "Villa",
    "Warehouse",
    "Factory",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFiles(Array.from(e.target.files)); // Convert FileList to array
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Start loading

  const data = new FormData();
  data.append("formType", formData.formType);
  data.append("category", formData.category);
  data.append("address", formData.address);
  data.append("desc", formData.desc);
  data.append("Area", formData.Area);
  data.append("status", formData.status);

  imageFiles.forEach(file => {
    data.append("images", file);
  });

  try {
    await axios.post(`${process.env.REACT_APP_API_URL || 'https://dvlarchitects.com/api'}/architecturedata`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    
    alert("Architecture data uploaded successfully!");

    // Reset form
    setFormData({
      formType: "Architecture",
      category: "",
      address: "",
      desc: "",
      Area: "",
      status: "",
    });
    setImageFiles([]);
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Upload failed");
  } finally {
    setIsLoading(false); // Stop loading
  }
};

  const typeOfForm = [
    "Architecture",
    "Interior",
    "Landscaping",
    "Warehouse",
    "Cafe",
  ];

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h2 className="text-center mb-4">Add New Data</h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Form Type */}
            <div className="form-group mb-4 d-flex mt-3 flex-wrap">
              {typeOfForm.map((type) => (
                <div className="form-check mx-3" key={type}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={type.toLowerCase()}
                    name="formType"
                    value={type}
                    checked={formData.formType === type}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={type.toLowerCase()}
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>

            {/* Category */}
            <div className="form-group mb-4">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Choose Category</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div className="form-group mb-4">
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="form-control"
                required
              />
            </div>

            {/* Area */}
            <div className="form-group mb-4">
              <input
                type="text"
                name="Area"
                value={formData.Area}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Area"
                required
              />
            </div>

            {/* Address */}
            <div className="form-group mb-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Address"
                required
              />
            </div>

            {/* Status */}
            <div className="form-group mb-4">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group mb-4">
              <textarea
              placeholder="Description"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                className="form-control"
                rows="3"
              />
            </div>

            <button 
  type="submit" 
  className="btn btn-success btn-block"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArchitectureData;
