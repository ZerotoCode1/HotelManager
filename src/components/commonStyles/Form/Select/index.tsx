import { useTheme, InputBase } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { BaseSelectProps, SelectChangeEvent } from "@mui/material/Select";
import { FieldInputProps, FormikProps } from "formik";
import { get, isArray } from "lodash";
import { withStyles } from "@mui/styles";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// not use textField

interface SelectOption {
  label: string | number;
  value: string | number | undefined;
  disabled?: boolean;
}

interface SelectField extends BaseSelectProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  options: SelectOption[];

  multiple?: boolean;

  variant?: "standard" | "outlined" | "filled";
  afterOnChange?: (value: SelectChangeEvent<any>) => void;
  onChangeReset: () => void;
  placeholder: string;
}

const Input = withStyles((theme) => {
  return {
    root: {
      "& div": {
        border: `1px solid ${theme.custom.border.default}`,
        padding: "16px 16px 16px 16px",
      },
      "& .Mui-error": {
        border: `1px solid ${theme.custom.border.error}`,
      },
    },
  };
})(InputBase);

const SelectField = (props: SelectField) => {
  const {
    label,
    disabled = false,
    className,
    field,
    form,
    afterOnChange,
    options,
    sx,
    fullWidth = true,
    onChangeReset,
    variant,
    multiple,
    placeholder,
  } = props;

  const { value, name } = field;
  const { errors, touched, setFieldValue, setFieldTouched } = form || {};
  const theme = useTheme();

  const errorMsg: any = get(errors, name);
  const isTouched = get(touched, name);
  const isShowMsg = isTouched && !!errorMsg;

  const handleChange = (e: SelectChangeEvent<any>) => {
    try {
      setFieldValue(name, e.target.value as string);
      onChangeReset && onChangeReset();
      if (afterOnChange) {
        afterOnChange(e.target.value);
      }
    } catch (error) {
      console.log("err", error);
    }
  };
  const renderOptions = () => {
    if (isArray(options)) {
      if (options.length === 0) {
        return <MenuItem disabled>No options</MenuItem>;
      }
      return options?.map((option) => {
        return (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
        );
      });
    }

    return null;
  };

  return (
    <FormControl fullWidth={fullWidth} variant={variant}>
      <InputLabel id={name}>{label}</InputLabel>
      {!value && (
        <p
          style={{
            position: "absolute",
            top: "50%",
            transform: isShowMsg ? "translate(16px,-90%)" : "translate(16px,-50%)",
            color: "#9ca3af",
          }}
        >
          {placeholder}
        </p>
      )}
      <Select
        labelId={name}
        id={name}
        name={name}
        value={value?.toString() || ""}
        label={label}
        onChange={handleChange}
        onBlur={() => {
          setFieldTouched(name);
        }}
        className={className}
        disabled={disabled}
        sx={sx}
        error={isShowMsg}
        multiple={multiple}
        IconComponent={KeyboardArrowDownOutlinedIcon}
        input={<Input id={name} />}
        // open={true}
      >
        {renderOptions()}
      </Select>
      {isShowMsg && (
        <FormHelperText
          sx={{
            color: theme.palette.error.main,
          }}
        >
          {errorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
