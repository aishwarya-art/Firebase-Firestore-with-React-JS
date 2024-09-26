import React, { useEffect, useState } from 'react';
import { createData, readData, updateData, deleteData } from './database'; // Import the data functions
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await readData();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateData(editId, { name: inputValue }); // Update existing data
      setEditId(null); // Reset the edit state
    } else {
      await createData({ name: inputValue }); // Create new data
    }
    setInputValue(''); // Clear input field
    const fetchedData = await readData(); // Refresh data
    setData(fetchedData);
  };

  const handleEdit = (item) => {
    setInputValue(item.name); // Set the input value to the selected item's name
    setEditId(item.id); // Set the item id to be edited
  };

  const handleDelete = async (id) => {
    await deleteData(id); // Delete the item
    const fetchedData = await readData(); // Refresh data
    setData(fetchedData);
  };

  return (
    <div className="container mt-5">
      <h2>Using Firebase Firestore with React JS for Database</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit" className="btn btn-primary">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm me-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="mt-5 text-center">
      <p>
          Created by <a href="https://www.linkedin.com/in/aishwarya-ms-aaa5b3224/" target="_blank" rel="noopener noreferrer">Aishwarya</a> | React with Firebase Firestore Demo
        </p>     
         </footer>
    </div>
  );
};

export default App;
