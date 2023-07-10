import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Flex } from "@chakra-ui/react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";
import { FilesReaderProps } from "./FilesReaderProps.model";

const FilesReader: React.FunctionComponent<FilesReaderProps> = (props) => {
  const { onComplete } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const handleXlsFiles = (file: File) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e: ProgressEvent<FileReader>) => {
          const bufferArray = e.target?.result as ArrayBuffer;
          const readFile = XLSX.read(bufferArray, { type: "array" });
          const readSheetNames = readFile.SheetNames[0];
          const readSheets = readFile.Sheets[readSheetNames];
          const fileData = XLSX.utils.sheet_to_json(readSheets);
          onComplete(fileData as []);
        };
      };

      const handleCsvFile = (file: File) => {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log(result);
            onComplete(result.data as []);
          },
        });
      };

      if (acceptedFiles.length) {
        const fileExtension = acceptedFiles[0].name
          .split(".")
          .pop()
          ?.toLowerCase();
        if (fileExtension === "xls" || fileExtension === "xlsx") {
          handleXlsFiles(acceptedFiles[0]);
        } else if (fileExtension === "csv") {
          handleCsvFile(acceptedFiles[0]);
        }
      }
    },
    [onComplete]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Box
        w="350px"
        p="5px"
        borderColor="red"
        border="2px"
        cursor="pointer"
        borderRadius="5px"
        h="145px"
        borderStyle="dashed"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Flex flexDirection="column" align="center" pt="15px">
            <Box>
              <FiUpload />
            </Box>
            <Box>Drag 'n' drop here</Box>
            <Box>or</Box>
            <Box>Click to browse files</Box>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default FilesReader;
