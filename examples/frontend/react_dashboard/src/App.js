import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => setActiveTab('stats')}
              >
                Stats
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Portfolio Dashboard</h5>
          {activeTab === 'overview' && (
            <p className="card-text">Welcome to the React + Bootstrap demo. This component demonstrates state management and UI styling.</p>
          )}
          {activeTab === 'stats' && (
            <div>
                <div className="alert alert-info">
                    Projects Completed: <strong>12</strong>
                </div>
                <div className="alert alert-success">
                    Lines of Code: <strong>15,000+</strong>
                </div>
            </div>
          )}
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
