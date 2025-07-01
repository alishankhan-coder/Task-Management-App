import React from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

const TasksList = ({ tasks, currentFilter, onToggleTask, onEditTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <EmptyState currentFilter={currentFilter} />;
  }

  return (
    <section className="tasks-section">
      <div className="tasks-container">
        <div className="tasks-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksList;
