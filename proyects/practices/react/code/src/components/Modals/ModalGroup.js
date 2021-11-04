import ReactDOM from "react-dom";
import "../../css/Modals.css";
import "../../css/ModalGroup.css";

export function ModalGroup(props){
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {props.children}
    </div>,
    document.getElementById("modal") // public/index.html
  );
}