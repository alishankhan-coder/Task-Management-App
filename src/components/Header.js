import React from 'react';

const Header = ({ stats }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">
          <i className="fas fa-tasks"></i>
          TaskFlow
        </h1>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.pending}</span>
            <span className="stat-label">Pending</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
