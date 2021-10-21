import React from "react";
import ReactDOM from "react-dom";
import "../css/Modal.css";

export function ButtonModal(props){
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {props.children}
    </div>,
    document.getElementById("modal")
  );
}