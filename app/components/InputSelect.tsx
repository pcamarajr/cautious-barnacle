import { FC } from "react";
import { Select, SelectProps } from "@headlessui/react";

type Option = {
  label: string;
  value: string | number;
};

export type InputSelectProps = {
  label: string;
  innerRef?: (ref: HTMLSelectElement) => void;
  options: Option[];
} & SelectProps;

export const InputSelect: FC<InputSelectProps> = ({
  label,
  innerRef,
  options,
  ...props
}) => {
  return (
    <label>
      {label}
      <Select ref={innerRef} {...props}>
        {options.map((option) => (
          <option key={`is_${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </label>
  );
};
