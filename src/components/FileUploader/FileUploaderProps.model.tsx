
export type FileUploaderProps = {
  onComplete: (candidateIdentities: []) => void;
  data: (d: boolean) => void;
  newDataFunction?: (newData: true | undefined) => boolean;
};