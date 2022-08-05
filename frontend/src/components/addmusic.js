import { Button, TextField } from "@mui/material"
import { Formik } from "formik"
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Addmusic = () => {
 
  const userSubmit = async (formdata) => {
    console.log(formdata);


    const response = await fetch('http://localhost:5000/music/add', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      console.log('success');
      Swal.fire({
        icon : "success",
        title : "Well Done👍",
        text : "You have done a wonderfull Job!!"
      });
     

    }else{
      console.log('error occured');
    }
  }

  
  return (
    <div className="container">
      <h1>Signup Here</h1>
      <hr />

      <Formik
        initialValues={{
          title: "",
          description: "",
          author: "",
          lyrics: "",
          image: "",
          musicfile:"",
          createdate:"",
        }}
         onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField 
                value={values.title} 
                onChange={handleChange} 
                id="title" 
                sx={{ mt: 5 }} 
                fullWidth 
                label="title"
                helperText={errors.title}
                error={errors.title ? true : false}
                />
            <TextField 
                value={values.description} 
                onChange={handleChange} 
                id="description" sx={{ mt: 5 }} 
                fullWidth 
                label="description" />
            <TextField 
                value={values.author}
                onChange={handleChange} 
                id="author" 
                sx={{ mt: 3 }} 
                fullWidth 
                label="author" />
            <TextField 
                value={values.lyrics} 
                onChange={handleChange} 
                id="lyrics" 
                sx={{ mt: 3 }} 
                fullWidth 
                label="lyrics" />
            <TextField
                value={values.image}
                onChange={handleChange}
                id="image"
                sx={{ mt: 3 }}
                fullWidth
                label="image"
                type="file"
            />
            <TextField
                value={values.musicfile}
                onChange={handleChange}
                id="musicfile"
                sx={{ mt: 3 }}
                fullWidth
                label="musicfile"
                type="file"
            /><TextField
            value={values.date}
            onChange={handleChange}
            id="date"
            sx={{ mt: 3 }}
            fullWidth
            label="date"
            type="date"
        />
            <Button type="submit" sx={{ mt: 5 }}>Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Addmusic;