import React, { ChangeEvent, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Container } from "@chakra-ui/react";
import FilesReader from "../FileReader/FilesReader";
import DynamicTable from "../DynamicTable/DynamicTable";

export default {
  title: "Components/DataDisplay",
} as Meta;

const DataDisplayTemp: Story = () => {
  const [list, setList] = useState<any[]>([]);
  const [editedRowIndex, setEditedRowIndex] = useState<number>(-1);

  const deletePerson = (index: number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const editPerson = (index: number) => {
    setEditedRowIndex(index);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof any
  ) => {
    const updatedList = [...list];
    updatedList[editedRowIndex] = {
      ...updatedList[editedRowIndex],
      [field]: e.target.value,
    };
    setList(updatedList);
  };

  const updatePerson = (index: number) => {
    setEditedRowIndex(-1);
  };

  const tableHeaders = list.length > 0 ? Object.keys(list[0]) : [];

  return (
    <>
      <Container pt={10} maxW="fit-content" centerContent>
        <FilesReader onComplete={(data: any[]) => setList(data)} />
        <DynamicTable
          data={list}
          editedRowIndex={editedRowIndex}
          deleteRow={deletePerson}
          editData={editPerson}
          handleInputChange={handleInputChange}
          updateData={updatePerson}
          showActions={false}
        />
      </Container>
    </>
  );
};

export const DataDisplay = DataDisplayTemp.bind({});
