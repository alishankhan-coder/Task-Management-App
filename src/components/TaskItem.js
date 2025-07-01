import React from 'react';

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <div className="task-content">
          <div className="task-text">{task.text}</div>
          <div className="task-meta">
            <span className={`task-priority ${task.priority}`}>
              {task.priority}
            </span>
            <span className="task-category">{task.category}</span>
            <span className="task-date">{formatDate(task.createdAt)}</span>
          </div>
        </div>
        <div className="task-actions">
          <button
            className="task-action-btn complete-btn"
            onClick={() => onToggle(task.id)}
            title={task.completed ? 'Mark as pending' : 'Mark as completed'}
          >
            <i className={`fas ${task.completed ? 'fa-undo' : 'fa-check'}`}></i>
          </button>
          <button
            className="task-action-btn edit-btn"
            onClick={() => onEdit(task.id)}
            title="Edit task"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="task-action-btn delete-btn"
            onClick={() => onDelete(task.id)}
            title="Delete task"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
