import { AdditionalFormikProps } from "@/interfaces/common";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { getIn } from "formik";

interface Props extends AdditionalFormikProps {
  options: Option[];
  placeholder?: string;
}

interface Option {
  label: string;
  value: string | number | any;
}

const AutocompleteField = (props: Props) => {
  const { options, form, field, placeholder } = props;

  const { name, value } = field;
  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);

  return (
    <Autocomplete
      id={name}
      freeSolo
      autoComplete={false}
      disableClearable
      fullWidth
      value={options.find((e) => e.value === value)}
      options={options.map((option) => option.label)}
      onChange={(e, label) => {
        const itemSelect = options.find((e) => e.label === label);
        setFieldValue(name, itemSelect?.value);
      }}
      getOptionKey={(option: string | Option) => {
        if (typeof option === "string") {
          return option;
        }
        return option.value;
      }}
      onBlur={() => setFieldTouched(name)}
      noOptionsText={"Không có kết quả"}
      renderInput={(params) => (
        <TextField
          {...params}
          id={name}
          placeholder={placeholder ?? "Search input"}
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownOutlinedIcon />
              </InputAdornment>
            ),
          }}
          error={isTouched && Boolean(errorMessage)}
          helperText={isTouched && errorMessage}
        />
      )}
    />
  );
};

export default AutocompleteField;
