import React from "react";
import "./MyModal.css";

const MyModal = ({ active, setActive, children }) => {
  if(!active) {
    return null;
  }
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
