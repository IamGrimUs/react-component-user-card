import * as React from 'react';
import './card.styles.css'

export const Card = ({children}) => {
  return (
    <div className="card-frame center bg-white">
      {children}
    </div>
  )
}