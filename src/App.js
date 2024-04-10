import React, { Suspense } from 'react';
import { BulletinProvider } from './context/BulletinContext';
import './App.css'; 
const AddBulletinForm = React.lazy(() => import('./components/AddBulletinForm'));
const BulletinBoard = React.lazy(() => import('./components/BulletinBoard'));

function App() {
  return (
    <BulletinProvider>
      <div className="App">
        <h1>Bulletin Board</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AddBulletinForm />
          <BulletinBoard />
        </Suspense>
      </div>
    </BulletinProvider>
  );
}

export default App;

