import { CommonStyles } from "@/components/commonStyles";
import { validationBase } from "@/consts/yup";
import { dateMoment } from "@/helpers/date";
import { colors, gender, top100Films } from "@/mocks";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, Formik } from "formik";

const useStyles = makeStyles(() => {
  return {
    boxField: {
      marginBottom: "12px",
    },
  };
});

const Form = () => {
  const classes = useStyles();

  const initialValue = {
    name: "",
    color: "",
    character: "",
    date: dateMoment.currentDate(),
    checkbox: false,
    gender: "male",
  };

  return (
    <Box>
      <Formik initialValues={initialValue} onSubmit={() => {}} validationSchema={validationBase}>
        {(props) => {
          console.log(props.values);

          return (
            <Box className="" style={{ width: "100%" }}>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Input"} htmlFor={"name"} required />
                <Field component={CommonStyles.InputField} {...props.getFieldProps("name")} placeholder={"Input"} />
              </Box>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Select"} htmlFor={"color"} required />
                <Field component={CommonStyles.SelectField} {...props.getFieldProps("color")} options={colors} placeholder={"Select"} />
              </Box>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Search and select"} htmlFor={"character"} required />
                <Field
                  component={CommonStyles.AutocompleteField}
                  options={top100Films}
                  {...props.getFieldProps("character")}
                  placeholder={"Search input and select"}
                />
              </Box>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Datepicker"} htmlFor={"date"} required />
                <Field component={CommonStyles.DatePickerField} {...props.getFieldProps("date")} />
              </Box>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Checkbox"} />
                <Field component={CommonStyles.CheckboxField} {...props.getFieldProps("checkbox")} />
              </Box>
              <Box className={classes.boxField}>
                <CommonStyles.Label title={"Gender"} />
                <Box className="">
                  <Field component={CommonStyles.RadioGroupField} {...props.getFieldProps("gender")} options={gender} />
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Form;
