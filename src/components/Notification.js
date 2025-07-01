import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-times-circle';
      default:
        return 'fa-info-circle';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#27ae60';
      case 'error':
        return '#e74c3c';
      default:
        return '#3498db';
    }
  };

  const notificationStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: getBackgroundColor(),
    color: 'white',
    padding: '15px 20px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    zIndex: 10000,
    animation: 'slideInRight 0.3s ease',
    fontWeight: 500,
    maxWidth: '300px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  return (
    <div style={notificationStyle}>
      <i className={`fas ${getIcon()}`}></i>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
