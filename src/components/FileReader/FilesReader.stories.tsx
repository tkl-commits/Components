import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import FilesReader from "./FilesReader";
import { FilesReaderProps } from "./FilesReaderProps.model";

export default {
  title: "Components/FilesReader",
  component: FilesReader,
} as Meta;

const FileReaderTemp: Story<FilesReaderProps> = () => {
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <>
      <FilesReader onComplete={(data) => setList(data)} />
    </>
  );
};

export const FileReader = FileReaderTemp.bind({});
