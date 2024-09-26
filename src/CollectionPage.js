import React, { useEffect, useState } from 'react';
import { createData, readData, updateData, deleteData } from './database'; // Import the data functions

const CollectionPage = () => {
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
    <div>
      <h1>Collection Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;
