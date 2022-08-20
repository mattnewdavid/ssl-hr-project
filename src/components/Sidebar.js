import React from 'react'

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="side-top-section">
        <h4>CloudletHR</h4>
        <p>Industry tested No. 1 Software Solution for modern Human Resource providers over the world</p>
      </div>
      <div className="side-mid-section">
        <p>Paying</p>
        <h2>N 40,000 NGN</h2>
        <small>For 30 employees</small>
      </div>
      <div className="side-bottom-section">
        <button> Make Payment </button>
      </div>
    </div>
  );
}
