import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Contact = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "grid",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      height: "40rem",
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();

  const redirectToContact = () => (window.location.href = url);

  const url =
    "https://crm.zohopublic.eu/crm/WebFormServeServlet?rid=d302f483e07795da470689ec9773a874f6eaca660d781895b55dda6abc9610aegid3b0e7af9423f3554b3adbd01629e1dde50ff73a452093fb8ac937f45411a64d8";
  return (
    <>
      <div className={classes.root}>
        <CircularProgress />
      </div>
      <div style={{ color: "white" }}>
        {setTimeout(function () {
          redirectToContact();
        }, 1500)}
      </div>
    </>
  );
};

export default Contact;
