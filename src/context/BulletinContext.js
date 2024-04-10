import React, { createContext, useState } from 'react';

  export const BulletinContext = createContext();
  
  export const BulletinProvider = ({ children }) => {
    const [bulletins, setBulletins] = useState([]);
  
    const addBulletin = (newBulletin) => {
      setBulletins([...bulletins, { ...newBulletin, id: Date.now() }]);
    };
  
    const updateBulletin = (id, updatedBulletin) => {
      setBulletins(bulletins.map(bulletin =>
        bulletin.id === id ? { ...bulletin, ...updatedBulletin } : bulletin
      ));
    };
  
    const deleteBulletin = (id) => {
      const index = bulletins.findIndex(bulletin => bulletin.id === id);
      if (index !== -1) {
        const newBulletins = [...bulletins];
        newBulletins.splice(index, 1);
        setBulletins(newBulletins);
      }
    };
  
    return (
      <BulletinContext.Provider value={{ bulletins, addBulletin, updateBulletin, deleteBulletin }}>
        {children}
      </BulletinContext.Provider>
    );
  };
  
