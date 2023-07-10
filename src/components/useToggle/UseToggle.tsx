import { useState } from "react";

export default function useToggle<T extends boolean>(defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  const toggleValue = (value: T) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? (value as T) : (!currentValue as T)
    );
  };

  return [value, toggleValue] as const;
}
