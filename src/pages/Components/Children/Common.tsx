import { CommonStyles } from "@/components/commonStyles";
import { accodionData } from "@/components/commonStyles/Accordion";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    boxField: {
      marginBottom: "12px",
    },
  };
});

const Common = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.boxField}>
        <CommonStyles.CicrularProgress open />
      </div>
      <div className={classes.boxField}>
        <CommonStyles.Rating value={3} />
      </div>
      <div className={classes.boxField}>
        <CommonStyles.Accordion options={accodionData} />
      </div>
    </div>
  );
};

export default Common;
