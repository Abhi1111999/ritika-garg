import React from 'react';

function Mains() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #73C0D8 0%, rgba(250, 250, 250, 0) 100%)',
      width: '100vw',
      height: '100vh',
      top: '-52px',
      left: '-21px',
      gap: '0px',
      opacity: '0px',
      position: 'relative' // Add position absolute to cover the entire screen
    }}>
      <div className="heading">
        <h2>All changes happens here</h2>
      </div>
    </div>
  );
}

export default Mains;
