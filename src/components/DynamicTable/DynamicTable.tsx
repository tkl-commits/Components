import React, { ChangeEvent } from "react";
import {
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
import ModalComponent from "../Modal/ModalComponent";
import { DynamicTableProps } from "./DynamicTable.model";

const DynamicTable: React.FC<DynamicTableProps> = ({
  data,
  editedRowIndex,
  deleteRow,
  editData,
  handleInputChange,
  updateData,
  showActions,
}) => {
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableContainer pt={10} maxW="100%">
      <Table>
        <TableCaption>just an ordinary table 😉</TableCaption>
        <Thead>
          <Tr>
            {tableHeaders.map((header) => (
              <Th key={header}>{header}</Th>
            ))}
            {showActions && <Th>Action</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((rowData: any, i: number) => (
            <Tr key={i}>
              {tableHeaders.map((header) => (
                <Td key={header}>
                  {editedRowIndex === i ? (
                    <Input
                      placeholder={header}
                      value={rowData[header]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(e, header as keyof any)
                      }
                    />
                  ) : (
                    <span>{rowData[header]}</span>
                  )}
                </Td>
              ))}
              {showActions && (
                <>
                  <Td>
                    {editedRowIndex === i ? (
                      <Button onClick={() => updateData(i)}>Update</Button>
                    ) : (
                      <Button onClick={() => editData(i)}>Edit</Button>
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
                      modalFunction={() => deleteRow(i)}
                    />
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
