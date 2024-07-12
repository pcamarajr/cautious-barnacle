import { FC, InputHTMLAttributes } from "react";

export type InputTextProps = {
  label: string;
  innerRef?: (ref: HTMLInputElement) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "ref">;

export const InputText: FC<InputTextProps> = ({
  label,
  innerRef,
  ...props
}) => (
  <label>
    {label}
    <input ref={innerRef} type="text" {...props} />
  </label>
);
