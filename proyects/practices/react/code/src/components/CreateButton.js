import "../css/CreateButton.css";

export function CreateButton({ setOpenModal }){
  return (
    <button
      className="CreateButton"
      onClick={() => setOpenModal(true)}
    >
      +
    </button>
  );
}