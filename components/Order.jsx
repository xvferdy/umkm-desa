import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Order = () => {
  const [value, setValue] = useState(null);

  // const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  console.log(value);
  const [loading, setLoading] = useState(false);

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const handleSubmit = async (params) => {
    // if (value === null || err) return alert("error");

    try {
      setLoading(true);
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, date: value }),
      });
      // const data = await res.json();

      if (res.status === 201) {
        alert("Terimakasih telah memesan melalui website kami");
      }
      if (res.status !== 201) {
        alert("Error Cuy");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="order">
      <div className="container order__container">
        <form className="order__form">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr(Boolean(!email.match(pattern)));
            }}
            error={err}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <button
            className="btn btn--primary"
            type="button"
            onClick={handleSubmit}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
