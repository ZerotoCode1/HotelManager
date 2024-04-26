import useToggle from "@/hooks/useToggle";
import { AdditionalFormikProps } from "@/interfaces/common";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, SxProps } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { getIn } from "formik";
import React, { ReactNode, forwardRef, useMemo } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface Props extends Omit<AdditionalFormikProps & TextFieldProps, "textField"> {
  variant?: any;
  size: "small" | "medium";
  iconStartInput?: ReactNode;
  sx?: SxProps;
  iconEndInput?: ReactNode;
  onChangeCustomize?: (value: any) => void;
  afterOnChange?: (value: string) => void;
  onClickEndAdornment?: () => void;
  sxEndAdornment?: SxProps;
  type?: string;
  prefix?: string;
  isFormatNumber?: boolean;
  disabled?: boolean;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  prefix?: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
  const { onChange, prefix, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator=","
      decimalSeparator="."
      valueIsNumericString
      prefix={prefix}
    />
  );
});

const InputField = (props: Props) => {
  const {
    field,
    form,
    variant,
    iconStartInput,
    iconEndInput,
    onChangeCustomize,
    afterOnChange,
    onClickEndAdornment,
    sxEndAdornment,
    type = "text",
    isFormatNumber,
    disabled = false,
  } = props;

  const { name, value, onBlur, onChange } = field || {};
  const { errors, touched } = form || {};
  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);
  const { show: showPassword, toggle: togglePassword } = useToggle();

  const typePassword = useMemo(() => {
    return showPassword ? "text" : "password";
  }, [showPassword]);
  console.log(typePassword, "typePassword");

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={name}
      type={type === "password" ? typePassword : type}
      name={name}
      value={value}
      fullWidth
      onBlur={onBlur}
      onChange={(e) => {
        if (onChangeCustomize) {
          onChangeCustomize(e.target.value);
          return;
        }

        onChange && onChange(e);
        afterOnChange && afterOnChange(e.target.value);
      }}
      error={isTouched && Boolean(errorMessage)}
      helperText={isTouched && errorMessage}
      variant={variant}
      InputProps={{
        inputComponent: isFormatNumber ? (NumericFormatCustom as any) : undefined,
        startAdornment: iconStartInput ? (
          <InputAdornment position="start" className="icon-start-input">
            {iconStartInput}
          </InputAdornment>
        ) : undefined,
        endAdornment: iconEndInput ? (
          <InputAdornment position="end" sx={sxEndAdornment || {}} onClick={onClickEndAdornment || undefined}>
            {iconEndInput}
          </InputAdornment>
        ) : type === "password" ? (
          <InputAdornment position="end">
            <IconButton onClick={togglePassword} onMouseDown={handleMouseDown} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={disabled}
      {...props}
    />
  );
};

export default InputField;
