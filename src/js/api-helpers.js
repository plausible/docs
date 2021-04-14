import React from 'react'

export const Required = ({children, color}) => (
  <span
    style={{
      color: '#ED8936',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      position: 'relative',
      bottom: '4px'
    }}>
    REQUIRED
  </span>
);

export const Optional = ({children, color}) => (
  <span
    style={{
      color: '#718096',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      position: 'relative',
      bottom: '4px'
    }}>
    optional
  </span>
);


