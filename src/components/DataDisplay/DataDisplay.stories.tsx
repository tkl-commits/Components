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
  const [list, setList] = useState<Person[]>([]);
  const [editedRowIndex, setEditedRowIndex] = useState<number>(-1);
  const [updatedValues, setUpdatedValues] = useState<Person>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });

  const deletePerson = (index: number) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const editPerson = (index: number) => {
    setEditedRowIndex(index);
    setUpdatedValues(list[index]);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Person
  ) => {
    setUpdatedValues((prevValues) => ({
      ...prevValues,
      [field]: e.target.value,
    }));
  };

  const updatePerson = (index: number) => {
    const updatedList = [...list];
    updatedList[index] = { ...updatedValues };
    setList(updatedList);
    setEditedRowIndex(-1);
    setUpdatedValues({
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
    });
  };
  return (
    <>
      <Container pt={10} maxW="fit-content" centerContent>
        <FilesReader onComplete={(data: Person[]) => setList(data)} />
        <TableContainer pt={10} maxW="100%">
          <Table>
            <TableCaption>just an ordinary table 😉</TableCaption>
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Date of Birth</Th>
                <Th>Email</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {list?.map((data: Person, i: number) => (
                <Tr key={data?.firstName + data?.lastName}>
                  <Td>
                    {editedRowIndex === i ? (
                      <Input
                        placeholder="first name"
                        value={updatedValues.firstName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(e, "firstName")
                        }
                      />
                    ) : (
                      <span>{data?.firstName}</span>
                    )}
                  </Td>
                  <Td>
                    {editedRowIndex === i ? (
                      <Input
                        placeholder="last name"
                        value={updatedValues.lastName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(e, "lastName")
                        }
                      />
                    ) : (
                      <span>{data?.lastName}</span>
                    )}
                  </Td>
                  <Td>
                    {editedRowIndex === i ? (
                      <Input
                        placeholder="date Of birth"
                        value={updatedValues.dateOfBirth}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(e, "dateOfBirth")
                        }
                      />
                    ) : (
                      <span>{data?.dateOfBirth}</span>
                    )}
                  </Td>
                  <Td>
                    {editedRowIndex === i ? (
                      <Input
                        placeholder="email"
                        value={updatedValues.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleInputChange(e, "email")
                        }
                      />
                    ) : (
                      <span>{data?.email}</span>
                    )}
                  </Td>
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
