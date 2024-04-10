import React, { useState, useContext } from 'react';
import { BulletinContext } from '../context/BulletinContext';

const Bulletin = React.memo(({ bulletin }) => {
  const { updateBulletin, deleteBulletin } = useContext(BulletinContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBulletin, setEditedBulletin] = useState(bulletin);

  const handleDelete = () => {
    deleteBulletin(bulletin.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedBulletin({
      ...editedBulletin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    updateBulletin(bulletin.id, editedBulletin);
    setIsEditing(false);
  };

  return (
    <div className="Bulletin">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedBulletin.title}
            onChange={handleChange}
            data-testid="edit-title-input" 
          />
          <input
            type="text"
            name="content"
            value={editedBulletin.content}
            onChange={handleChange}
            data-testid="edit-content-input"
          />
          <button onClick={handleSubmit} data-testid="save-button">Save</button>
        </>
      ) : (
        <>
          <h3>{bulletin.title}</h3>
          <p>{bulletin.content}</p>
          <button onClick={handleEdit} data-testid="edit-button">Edit</button>
          <button onClick={handleDelete} data-testid="delete-button">Delete</button>
        </>
      )}
    </div>
  );
});

export default Bulletin;
