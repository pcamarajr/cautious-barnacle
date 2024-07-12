import { FC, InputHTMLAttributes } from "react";

export type InputCheckboxProps = {
  label: string;
  innerRef?: (ref: HTMLInputElement) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "ref">;

export const InputCheckbox: FC<InputCheckboxProps> = ({
  label,
  innerRef,
  ...props
}) => (
  <label>
    <input ref={innerRef} type="checkbox" {...props} />
    {label}
  </label>
);
