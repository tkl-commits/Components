import React, { ChangeEvent, useState } from "react";
import { Meta, Story } from "@storybook/react";
import DynamicTable from "./DynamicTable";
import { DynamicTableProps } from "./DynamicTable.model";

export default {
  title: "Components/DynamicTable",
  component: DynamicTable,
} as Meta;

const DynamicTableTemp: Story<DynamicTableProps> = (args) => {
  const deleteRow = (i: number) => {
    alert("deleted row " + i);
  };
  const editData = (i: number) => {
    alert("edited row " + i);
  };
  const updateData = (i: number) => {
    alert("updated row " + i);
  };
  return (
    <>
      <DynamicTable
        {...args}
        deleteRow={(i) => deleteRow(i)}
        editData={(i) => editData(i)}
        updateData={(i) => updateData(i)}
      />
    </>
  );
};

export const tomsDynamicTable = DynamicTableTemp.bind({});
tomsDynamicTable.args = {
  data: [
    { firstName: "ben", lastName: "ten", id: 16 },
    { firstName: "james", lastName: "bond", id: 0o7 },
  ],
  showActions: false,
};
