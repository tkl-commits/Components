import React, { useCallback } from 'react';
import { FileUploaderProps } from './FileUploaderProps.model';
import { useDropzone } from 'react-dropzone';
import { Box } from '@chakra-ui/react';

const FileUploader: React.FunctionComponent<FileUploaderProps> = (props) => {
  const { data, onComplete } = props;


  const onDrop = useCallback((acceptedFiles) => {

    const handleXlsFile = (file: any) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e: any) => {
        const bufferArray = e.target.result;
        const readFile = Xlsx.readFile;
      };
    };
  }, [onComplete]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop });
  return (
        <>
            <Box {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </Box>
        </>
  );
};