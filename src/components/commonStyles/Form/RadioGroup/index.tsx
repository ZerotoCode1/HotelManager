import { AdditionalFormikProps } from "@/interfaces/common";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface Props extends AdditionalFormikProps {
  options: { label: string; value: string }[];
}

const RadioGroupField = (props: Props) => {
  const { options, form, field } = props;
  const { value, name } = field;
  const { setFieldValue } = form;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0].value}
        name="radio-buttons-group"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      >
        {options.map((item) => {
          return <FormControlLabel value={item.value} control={<Radio />} label={item.label} />;
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;
