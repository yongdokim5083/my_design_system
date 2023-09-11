import React from 'react';
import './Label.css';

interface LabelProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({ label, backgroundColor, size, ...props }: LabelProps) => {
  return (
    <span className={['el_label', `el_label--${size}`].join(' ')} style={{ backgroundColor }} {...props} {...props}>
      {label}
    </span>
  );
};
