export function FormButtons({ setOpenModal }) {
  const onCancel = () => {
    setOpenModal(false)
  }

  return (
    <label 
      className="ModalButtons--box"
      htmlFor="form-buttons"
    >
      <button
        className="ModalButtons--button ModalButtons--button__cancel"
        onClick={onCancel}
      >
        Cancelar
      </button>
      <button
        className="ModalButtons--button ModalButtons--button__accept"
        type="submit"
      >
        Aceptar
      </button>
    </label>
  );
}