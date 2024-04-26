import { CommonStyles } from "@/components/commonStyles";
import BaseRoute from "@/consts/baseRoute";
import { InitialValueLogin } from "@/interfaces/formik";
import { useAuth } from "@/providers/AuthenticationProvider";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "16px",
      borderRadius: "24px 16px",
    },
    label: {
      marginBottom: "8px",
      fontWeight: 500,
    },
    title: {
      fontWeight: 700,
      fontSize: "24px",
      marginBottom: "16px",
    },
  };
});

const Login = () => {
  const classes = useStyles();
  const { login, isLogged } = useAuth();
  const callLogin = (values: InitialValueLogin) => {
    const { username, password } = values;

    login({ username, password });
  };

  if (isLogged) {
    return <Navigate to={BaseRoute.Homepage} />;
  }

  const initialValue: InitialValueLogin = {
    username: "quang",
    password: "quang",
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialValue}
      onSubmit={(values) => {
        callLogin(values);
      }}
    >
      {() => (
        <Form>
          <div className={classes.root}>
            <Box className={classes.content} sx={{ width: { xs: "100%", sm: "450px" } }}>
              <h3 className={classes.title}>Login</h3>
              <div style={{ marginBottom: "16px" }}>
                <h4 className={classes.label}>Username</h4>
                <Field fullWidth component={CommonStyles.InputField} name="username" placeholder={"username"} />
              </div>
              <div>
                <h4 className={classes.label}>Password</h4>
                <Field component={CommonStyles.InputField} showHidePassword name="password" type="password" fullWidth placeholder={"password"} />
              </div>
              <div className="">
                <CommonStyles.Button
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "none",
                    color: "#000",
                    marginBottom: "4px",
                  }}
                  onClick={() => {}}
                >
                  Quên mật khẩu
                </CommonStyles.Button>
              </div>
              <CommonStyles.Button
                style={{ marginTop: "0px", background: "#22c55e", color: "#fff", width: "100%", padding: "12px 0px" }}
                type="submit"
              >
                Đăng nhập
              </CommonStyles.Button>
            </Box>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
