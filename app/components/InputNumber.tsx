import { FC, InputHTMLAttributes } from "react";

export type InputNumberProps = {
  label: string;
  innerRef?: (ref: HTMLInputElement) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "ref">;

export const InputNumber: FC<InputNumberProps> = ({
  label,
  innerRef,
  ...props
}) => (
  <label>
    {label}
    <input ref={innerRef} type="number" {...props} />
  </label>
);
