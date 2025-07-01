import React from 'react';

const EmptyState = ({ currentFilter }) => {
  const getEmptyMessage = () => {
    switch (currentFilter) {
      case 'pending':
        return {
          title: 'No pending tasks',
          message: 'All tasks are completed!'
        };
      case 'completed':
        return {
          title: 'No completed tasks',
          message: 'Complete some tasks to see them here!'
        };
      default:
        return {
          title: 'No tasks yet',
          message: 'Add your first task to get started!'
        };
    }
  };

  const { title, message } = getEmptyMessage();

  return (
    <section className="tasks-section">
      <div className="tasks-container">
        <div className="empty-state">
          <div className="empty-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
