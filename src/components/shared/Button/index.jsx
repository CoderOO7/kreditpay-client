import React from 'react';
import styles from './index.module.css';

const Button = ({
  className = '',
  children,
  icon,
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick
}) => {
  const Icon = icon;

  const _onClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${[styles.button]} ${className} ${disabled && styles.disabled}`}
      onClick={_onClick}
      type={type}
      disabled={disabled}
    >
      {isLoading && <span className={`${styles.spinner}`} />}
      {children}
      {icon && <Icon />}
    </button>
  );
};

export default Button;
export { Button };
