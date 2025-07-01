import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import FilterSection from './components/FilterSection';
import TasksList from './components/TasksList';
import TaskModal from './components/TaskModal';
import Notification from './components/Notification';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSort, setCurrentSort] = useState('newest');
  const [editingTask, setEditingTask] = useState(null);
  const [notification, setNotification] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Generate unique ID for tasks
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Add new task
  const addTask = (taskData) => {
    const task = {
      id: generateId(),
      text: taskData.text,
      priority: taskData.priority,
      category: taskData.category,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null
    };

    setTasks(prev => [task, ...prev]);
    showNotification('Task added successfully!', 'success');
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const updated = {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date().toISOString() : null
        };
        showNotification(
          updated.completed ? 'Task completed!' : 'Task unmarked as completed',
          'success'
        );
        return updated;
      }
      return task;
    }));
  };

  // Delete task
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prev => prev.filter(task => task.id !== id));
      showNotification('Task deleted successfully!', 'success');
    }
  };

  // Edit task
  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setEditingTask(task);
    }
  };

  // Save edited task
  const saveTask = (taskData) => {
    setTasks(prev => prev.map(task => {
      if (task.id === editingTask.id) {
        return {
          ...task,
          text: taskData.text,
          priority: taskData.priority,
          category: taskData.category
        };
      }
      return task;
    }));
    setEditingTask(null);
    showNotification('Task updated successfully!', 'success');
  };

  // Clear completed tasks
  const clearCompleted = () => {
    const completedCount = tasks.filter(t => t.completed).length;
    if (completedCount === 0) {
      showNotification('No completed tasks to clear', 'info');
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
      setTasks(prev => prev.filter(task => !task.completed));
      showNotification(`${completedCount} completed task(s) cleared!`, 'success');
    }
  };

  // Get filtered and sorted tasks
  const getFilteredTasks = () => {
    let filtered = [...tasks];

    // Apply filter
    switch (currentFilter) {
      case 'pending':
        filtered = filtered.filter(t => !t.completed);
        break;
      case 'completed':
        filtered = filtered.filter(t => t.completed);
        break;
      default:
        break;
    }

    // Apply sort
    switch (currentSort) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        filtered.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }

    return filtered;
  };

  // Show notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Calculate stats
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length
  };

  return (
    <div className="container">
      <Header stats={stats} />
      
      <main className="main-content">
        <TaskInput onAddTask={addTask} />
        
        <FilterSection
          currentFilter={currentFilter}
          currentSort={currentSort}
          onFilterChange={setCurrentFilter}
          onSortChange={setCurrentSort}
          onClearCompleted={clearCompleted}
        />
        
        <TasksList
          tasks={getFilteredTasks()}
          currentFilter={currentFilter}
          onToggleTask={toggleTask}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
        />
      </main>
      
      {editingTask && (
        <TaskModal
          task={editingTask}
          onSave={saveTask}
          onClose={() => setEditingTask(null)}
        />
      )}
      
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
