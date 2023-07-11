import React, { ChangeEvent, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  Container,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  Button,
} from "@chakra-ui/react";
import FilesReader from "../FileReader/FilesReader";
import { Person } from "./DataDisplayProps.model";
import ModalComponent from "../Modal/ModalComponent";

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
        <TableContainer pt={10} maxW="100%">
          <Table>
            <TableCaption>just an ordinary table 😉</TableCaption>
            <Thead>
              <Tr>
                {tableHeaders.map((header) => (
                  <Th key={header}>{header}</Th>
                ))}
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {list?.map((data: any, i: number) => (
                <Tr key={i}>
                  {tableHeaders.map((header) => (
                    <Td key={header}>
                      {editedRowIndex === i ? (
                        <Input
                          placeholder={header}
                          value={data[header]}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(e, header as keyof any)
                          }
                        />
                      ) : (
                        <span>{data[header]}</span>
                      )}
                    </Td>
                  ))}
                  <Td>
                    {editedRowIndex === i ? (
                      <Button onClick={() => updatePerson(i)}>Update</Button>
                    ) : (
                      <Button onClick={() => editPerson(i)}>Edit</Button>
                    )}
                  </Td>
                  <Td>
                    <ModalComponent
                      modalButton="Delete"
                      modalTitle="Delete"
                      modalMessage="Are you sure you want to continue this action"
                      execute="Yes"
                      cancel="No"
                      buttonTheme="red"
                      modalFunction={() => deletePerson(i)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export const DataDisplay = DataDisplayTemp.bind({});
