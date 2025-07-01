import React from 'react';

const FilterSection = ({ currentFilter, currentSort, onFilterChange, onSortChange, onClearCompleted }) => {
  return (
    <section className="filter-section">
      <div className="filter-container">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
          >
            <i className="fas fa-list"></i>
            All Tasks
          </button>
          <button
            className={`filter-tab ${currentFilter === 'pending' ? 'active' : ''}`}
            onClick={() => onFilterChange('pending')}
          >
            <i className="fas fa-clock"></i>
            Pending
          </button>
          <button
            className={`filter-tab ${currentFilter === 'completed' ? 'active' : ''}`}
            onClick={() => onFilterChange('completed')}
          >
            <i className="fas fa-check-circle"></i>
            Completed
          </button>
        </div>
        <div className="filter-options">
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priority">By Priority</option>
            <option value="category">By Category</option>
          </select>
          <button onClick={onClearCompleted} className="clear-btn">
            <i className="fas fa-trash"></i>
            Clear Completed
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;

