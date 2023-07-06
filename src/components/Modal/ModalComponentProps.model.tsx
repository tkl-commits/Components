export type ModalComponentProps = {
  modalButton: string;
  modalTitle: string;
  modalBody: string;
  execute: string;
  cancel: string;
  buttonTheme: string;
  modalFunction?: () => void;
};