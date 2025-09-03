import React, { useState } from "react";
import axios from "axios";

const AddBlogs = () => {
  const [formData, setFormData] = useState({
  description: "",
});
const [imageFile, setImageFile] = useState(null);
const [isLoading, setIsLoading] = useState(false);

// Text input change
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

// Image file input change
const handleImageChange = (e) => {
  setImageFile(e.target.files[0]);
};

// Submit form
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const data = new FormData();
  data.append("description", formData.description);
  if (imageFile) {
    data.append("image", imageFile); // matches backend .single("image")
  }

  try {
    await axios.post(`${process.env.REACT_APP_API_URL || 'https://dvlarchitects.com/api'}/addblogs`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Blog uploaded successfully!");

    // ✅ Reset both fields
    setFormData({ description: "" });
    setImageFile(null);

    // Reset file input manually
    document.querySelector('input[name="image"]').value = "";
  } catch (error) {
    console.error("Upload error:", error);
    alert("Upload failed");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h2 className="text-center mb-3">Add Blogs Data</h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Image Upload */}
            <div className="form-group mb-3">
              <label className="mb-2">Image Upload</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
                required
              />
            </div>

            {/* Description */}
            <div className="form-group mb-3">
              <label className="mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
              />
            </div>

            {/* Submit */}
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

export default AddBlogs;
