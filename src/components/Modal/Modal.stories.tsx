import React from "react";
import { Meta, Story } from "@storybook/react";
import ModalComponent from "./ModalComponent";
import { ModalComponentProps } from "./ModalComponentProps.model";

export default {
  title: "Components/Modal",
  component: ModalComponent,
} as Meta;

const ModalComponentTemp: Story<ModalComponentProps> = (args) => {
  const runFunction = () => {
    alert("Function executed");
  };
  return (
    <>
      <ModalComponent {...args} modalFunction={runFunction} />
    </>
  );
};

export const Modal = ModalComponentTemp.bind({});
Modal.args = {
  modalButton: "Open Modal",
  modalMessage: "Are you sure you want to continue this action",
  cancel: "No",
  execute: "Yes",
  buttonTheme: "blue",
};
