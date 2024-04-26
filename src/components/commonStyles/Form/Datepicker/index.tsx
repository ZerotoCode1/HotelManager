import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdditionalFormikProps } from "@/interfaces/common";
import { TextField } from "@mui/material";
import { dateMoment } from "@/helpers/date";
import { getIn } from "formik";
import "dayjs/locale/vi";
import "dayjs/locale/en";

interface Props extends AdditionalFormikProps {}

const DatePickerField = (props: Props) => {
  const { form, field } = props;

  const { name, value } = field;
  //   console.log(value, "value");

  const { touched, errors, setFieldValue } = form;
  const isTouched = getIn(touched, name!);
  const errorMessage = getIn(errors, name!);

  const maxDate = dateMoment.currentDate();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en"}>
      <DatePicker
        defaultValue={dayjs(dateMoment.currentDate())}
        value={dayjs(value)}
        onChange={(newValue) => setFieldValue(name, newValue)}
        format="DD/MM/YYYY"
        slots={{
          textField: TextField,
          //   openPickerButton: CalendarMonthOutlinedIcon,
        }}
        slotProps={{
          openPickerButton: {},
          textField: { id: name, fullWidth: true, error: isTouched && Boolean(errorMessage), helperText: isTouched && errorMessage },
        }}
        minDate={dayjs("01/01/1980")}
        maxDate={dayjs(maxDate)}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
