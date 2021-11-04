import ReactDOM from "react-dom";
import "../../css/Modals.css";
import "../../css/ModalItem.css";

export function ModalItem(props){
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {props.children}
    </div>,
    document.getElementById("modal") // public/index.html
  );
}