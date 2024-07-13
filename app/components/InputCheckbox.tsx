import { FC, InputHTMLAttributes } from "react";

export type InputCheckboxProps = {
  label: string;
  innerRef?: (ref: HTMLInputElement) => void;
  value?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "type" | "ref">;

export const InputCheckbox: FC<InputCheckboxProps> = ({
  label,
  innerRef,
  value,
  ...props
}) => (
  <label>
    <input ref={innerRef} type="checkbox" checked={value} {...props} />
    {label}
  </label>
);
