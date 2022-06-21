import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { FC, ReactEventHandler, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";


const PostForm: FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [file, setFile] = useState<File>();

  const [formValues, setFormValues] = useState({
    title: "",
    date: value!.toLocaleDateString(),
    img: "",
    content: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if(file != null) {
        formData.append('image', file);
        formData.append('title', formValues.title);
        formData.append('date', formValues.date);
        formData.append('img', formValues.img);
        formData.append('content', formValues.content);
        fetch("http://localhost:3080/api/news", {
            method: "POST",
            body: formData,
        });
    } else {
        console.log('no file attached');
        return
    }
  };


  return (
    <Box
      justifyContent="center"
      sx={{
        bgcolor: "white",
        color: "#000000",
        display: "flex",
        fontFamily: "Prompt",
        pt: "2em",
        pb: "2em",
        pr: "2em",
        pl: "2em",
      }}
    >
      <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid
            container
            justifyContent="center"
            direction="column"
            spacing={5}
          >
            <Grid item justifyContent="center" sx={{ display: "flex" }}>
              <p style={{ paddingRight: "1em" }}>Title:</p>

              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                inputProps={{ style: { color: "#000000", width: "100%" } }}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
              />
            </Grid>
            <Grid item justifyContent="center" sx={{ display: "flex" }}>
              <p style={{ paddingRight: "1em" }}>Date:</p>
              <DatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                //! in this case avoids the 'null' check
                onChange={(newDate) => {
                  setFormValues({
                    ...formValues,
                    date: newDate!.toLocaleDateString(),
                  });
                  setValue(newDate);
                }}
                value={value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      fontFamily: "Prompt",
                      color: "black",
                      svg: { color: "black" },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item justifyContent="center" sx={{ display: "flex" }}>
              <p style={{ paddingRight: "1em" }}>
                {formValues.img == ""
                  ? "Select Image"
                  : formValues.img.replace(/^.*[\\\/]/, "")}
              </p>
              <Button
                variant="contained"
                component="label"
                sx={{ fontFamily: "Prompt" }}
              >
                Upload file
                <input
                  type="file"
                  hidden
                  accept=".jpg,.jpeg,.png,.gif"
                  onChange={(e) => {
                    setFormValues({ ...formValues, img: e.target.value.replace(/^.*[\\\/]/, "") });
                    if (!e.target.files || e.target.files.length === 0) {
                      alert("You must select a valid file!");
                    } else {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
              </Button>
            </Grid>
            <Grid item justifyContent="center" sx={{ display: "flex" }}>
              <p style={{ paddingRight: "1em" }}>Content:</p>
              <TextField
                multiline
                placeholder="Enter content"
                rows={4}
                onChange={(e) =>
                  setFormValues({ ...formValues, content: e.target.value })
                }
              />
            </Grid>
            <Grid item justifyContent="center" sx={{ display: "flex" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ fontFamily: "Prompt" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </form>
    </Box>
  );
};

export default PostForm;
