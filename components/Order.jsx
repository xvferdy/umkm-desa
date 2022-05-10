import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Order = () => {
  const [value, setValue] = React.useState(null);
  return (
    <div className="order">
      <div className="container order__container">
        <form className="order__form">
          <TextField id="outlined-basic" label="Guest" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Reservation Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <button className="btn btn--primary" type="button">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
