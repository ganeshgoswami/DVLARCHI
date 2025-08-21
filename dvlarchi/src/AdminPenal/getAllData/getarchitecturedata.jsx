import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const ViewArchitectureList = () => {
  const [architectureData, setArchitectureData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    formType: "",
    category: "",
    address: "",
    Area: "",
    status: "",
    desc: "",
    image: null,
  });
  console.log(architectureData);

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

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getArchitectures");
      setArchitectureData(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/deletearchitecturedata/${id}`);
      fetchData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setFormData({
      formType: item.formType,
      category: item.category,
      address: item.address,
      Area: item.Area,
      status: item.status,
      desc: item.desc,
      images: null, // reset images to allow new upload
    });
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData((prev) => ({ ...prev, images: files })); // store files array
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const typeOfForm = [
    "Architecture",
    "Interior",
    "Landscaping",
    "Warehouse",
    "Cafe",
  ];

  const handleUpdate = async () => {
    try {
      const updatedData = new FormData();
      updatedData.append("formType", formData.formType);
      updatedData.append("category", formData.category);
      updatedData.append("address", formData.address);
      updatedData.append("Area", formData.Area);
      updatedData.append("status", formData.status);
      updatedData.append("desc", formData.desc);

      // Append new images if uploaded
      if (formData.images && formData.images.length > 0) {
        for (let i = 0; i < formData.images.length; i++) {
          updatedData.append("images", formData.images[i]);
        }
      }

      await axios.patch(
        `http://localhost:5000/updateArchitecturedata/${editingItem._id}`,
        updatedData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setShowModal(false);
      fetchData(); // refresh list
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const ReadMoreText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateWords = (str, num) => {
      return (
        str.split(" ").slice(0, num).join(" ") +
        (str.split(" ").length > num ? "..." : "")
      );
    };

    return (
      <div>
        <p className="mb-1">{isExpanded ? text : truncateWords(text, 8)}</p>
        {text.split(" ").length > 8 && (
          <button
            className="btn btn-link p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Architecture Data</h2>
      <table className="table table-bordered table-striped table-responsive">
  <thead className="table-dark">
    <tr>
      <th>Form Type</th>
      <th>Category</th>
      <th className="d-none d-md-table-cell">Address</th>
      <th className="d-none d-md-table-cell">Area</th>
      <th className="d-none d-md-table-cell">Status</th>
      <th className="d-none d-md-table-cell">Description</th>
      <th>Images</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {architectureData.map((item) => (
      <tr key={item._id}>
        <td>{item.formType}</td>
        <td>{item.category}</td>

        {/* Hide these columns on small screen */}
        <td className="d-none d-md-table-cell">{item.address}</td>
        <td className="d-none d-md-table-cell">{item.Area}</td>
        <td className="d-none d-md-table-cell">{item.status}</td>
        <td className="d-none d-md-table-cell">
          <ReadMoreText text={item.desc} />
        </td>

        <td>
          {item.images[0] ? (
            <img
            className="img-table"
              src={`http://localhost:5000/images/uploads/${item.images[0]}`}
              alt="img"
              width="60"
              height="60"
            />
          ) : (
            "No image"
          )}
        </td>
       <td>
  <div className="d-flex flex-wrap gap-2">
    <button
      className="btn btn-warning btn-sm d-md-none" // small button only on mobile
      onClick={() => handleEditClick(item)}
    >
      ✏️
    </button>
    <i class="bi bi-pencil-square"></i>
    <button
      className="btn btn-danger btn-sm d-md-none" // small button only on mobile
      onClick={() => handleDelete(item._id)}
    >
      🗑️
    </button>

    <button
      className="btn btn-warning d-none d-md-inline-block" // normal button for desktop
      onClick={() => handleEditClick(item)}
    >
      Edit
    </button>
    
    <button
      className="btn btn-danger d-none d-md-inline-block" // normal button for desktop
      onClick={() => handleDelete(item._id)}
    >
      Delete
    </button>
  </div>
</td>

      </tr>
    ))}
  </tbody>
</table>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Architecture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Form Type</Form.Label>
              <div className="mb-3 d-flex justify-content-center flex-wrap">
                {typeOfForm.map((type) => (
                  <div className="form-check mx-3" key={type}>
                    <input
                      className="form-check-input"
                      type="radio"
                      id={type.toLowerCase()}
                      name="formType"
                      value={type}
                      checked={formData.formType === type}
                      onChange={handleFormChange}
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
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleFormChange}
              >
                <option value="">Choose Category</option>
                {categoryOptions.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                name="Area"
                value={formData.Area}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleFormChange}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="desc"
                rows={3}
                value={formData.desc}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Change Image</Form.Label>
              <Form.Control
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleFormChange}
                className="form-control"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewArchitectureList;
