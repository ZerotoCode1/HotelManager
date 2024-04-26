import { Checkbox } from "@mui/material";
import { AdditionalFormikProps } from "@/interfaces/common";
interface Props extends AdditionalFormikProps {}

const CheckboxField = (props: Props) => {
  const { form, field } = props;
  const { value, name } = field;
  const { setFieldValue } = form;
  return <Checkbox value={value} checked={value} onChange={(e, value) => setFieldValue(name, value)} />;
};

export default CheckboxField;
