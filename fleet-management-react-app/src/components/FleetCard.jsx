import React from 'react';

const FleetCard = ({ fleet, onUpdateDriver, onToggleStatus, onDelete }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>Reg No: {fleet.regNo}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.status}</p>
      <button onClick={() => { 
        onUpdateDriver(fleet.id)}}>
        Update Driver
      </button>
      <button onClick={() => { 
        onToggleStatus(fleet.id)}}>
        Toggle Status
      </button>
      <button onClick={() => { 
        onDelete(fleet.id)}}>
        Delete
      </button>

    </div>
  );
}
export default React.memo(FleetCard);