"use client";

import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  RegisterOptions,
  useController,
} from "react-hook-form";

import { InputText, InputTextProps } from "@/app/components";

export type ControlledTextProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
> = {
  name: FormFieldName;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues, FormFieldName>;
  disabled?: boolean;
  value?: PathValue<FormFieldValues, FormFieldName>;
} & InputTextProps;

export const ControlledText = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
>({
  name,
  control,
  rules,
  disabled,
  value = "" as PathValue<FormFieldValues, FormFieldName>,
  ...props
}: ControlledTextProps<FormFieldValues, FormFieldName>) => {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
    rules,
    disabled,
    defaultValue: value,
  });

  return <InputText innerRef={ref} {...field} {...props} />;
};
