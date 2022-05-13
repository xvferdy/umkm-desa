import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Modal from "./Modal";

const Order = () => {
  const [value, setValue] = useState(null);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const handleSubmit = async () => {
    if (!email.match(pattern)) {
      return setText("Periksa kembali Email"), setModal(true);
    }

    try {
      setLoading(true);
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, date: value }),
      });

      if (res.status === 201) {
        setText("Terima kasih telah memesan melalui website kami");
        setModal(true);
        setEmail("");
        setValue(null);
        setErr(false);
      }
      if (res.status !== 201) {
        setText("Tanggal error");
        setModal(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setModal(false);
    setLoading(false);
  };

  return (
    <div className="order">
      <div className="container order__container">
        <Modal modal={modal} closeModal={closeModal} text={text} />
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
              renderInput={(params) => (
                <TextField {...params} sx={{ minWidth: 148 }} />
              )}
            />
          </LocalizationProvider>
          <button
            className={loading ? "btn btn--disable" : "btn btn--primary"}
            type="button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                process
                <span className="AnimatedEllipsis" />
              </>
            ) : (
              "Book"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
