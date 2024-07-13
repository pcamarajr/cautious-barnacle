"use client";

import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  RegisterOptions,
  useController,
} from "react-hook-form";

import { InputSelect, InputSelectProps } from "@/app/components";

export type ControlledSelectProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<
    FormFieldValues,
    string | number | undefined
  >,
> = {
  name: FormFieldName;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues, FormFieldName>;
  disabled?: boolean;
  value?: PathValue<FormFieldValues, FormFieldName>;
} & Omit<
  InputSelectProps,
  "onChange" | "onBlur" | "value" | "disabled" | "innerRef"
>;

export const ControlledSelect = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<
    FormFieldValues,
    string | number | undefined
  >,
>({
  name,
  control,
  rules,
  disabled,
  value,
  ...props
}: ControlledSelectProps<FormFieldValues, FormFieldName>) => {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
    rules,
    disabled,
    defaultValue: value,
  });

  return <InputSelect innerRef={ref} {...field} {...props} />;
};
