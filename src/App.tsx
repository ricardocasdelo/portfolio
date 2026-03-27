import React, { useState, useEffect } from 'react';
import { initialData, PortfolioData } from './data';
import PortfolioView from './components/PortfolioView';
import PortfolioEdit from './components/PortfolioEdit';
import Login from './components/Login';

export default function App() {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error('Error parsing saved data', e);
      }
    }
  }, []);

  const handleSave = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('portfolioData', JSON.stringify(newData));
    setIsEditing(false);
  };

  const handleEditClick = () => {
    if (isAuthenticated) {
      setIsEditing(true);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setIsEditing(true);
  };

  return (
    <>
      {showLogin && (
        <Login 
          onLogin={handleLogin} 
          onCancel={() => setShowLogin(false)} 
        />
      )}
      
      {isEditing ? (
        <PortfolioEdit 
          data={data} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      ) : (
        <PortfolioView 
          data={data} 
          onEdit={handleEditClick} 
          isAuthenticated={isAuthenticated}
        />
      )}
    </>
  );
}
