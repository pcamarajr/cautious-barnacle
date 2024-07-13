"use client";

import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  RegisterOptions,
  useController,
} from "react-hook-form";

import { InputNumber, InputNumberProps } from "@/app/components";

export type ControlledNumberProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, number | undefined>,
> = {
  name: FormFieldName;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues, FormFieldName>;
  disabled?: boolean;
  value?: PathValue<FormFieldValues, FormFieldName>;
} & InputNumberProps;

export const ControlledNumber = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, number | undefined>,
>({
  name,
  control,
  rules,
  disabled,
  value = "" as PathValue<FormFieldValues, FormFieldName>,
  ...props
}: ControlledNumberProps<FormFieldValues, FormFieldName>) => {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
    rules,
    disabled,
    defaultValue: value,
  });

  return <InputNumber innerRef={ref} {...field} {...props} />;
};
