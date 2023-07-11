import { ChangeEvent } from "react";

export type DynamicTableProps = {
  data: any[];
  editedRowIndex: number;
  deleteRow: (index: number) => void | any;
  editData: (index: number) => void | any;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof any
  ) => void;
  updateData: (index: number) => void | any;
  showActions: boolean;
};
