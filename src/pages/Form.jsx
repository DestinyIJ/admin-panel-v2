import React from 'react'
import { Box, Button, TextField } from "@mui/material"
import { Formik } from 'formik'
import * as yup from "yup"
import useMediaQuery from '@mui/material/useMediaQuery'
import { Header } from '../components'

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "", 
  address1: "",
  address2: ""
}

const phoneRegEx = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email!").required("required"),
  contact: yup.string().matches(phoneRegEx, "Invalid Phone Number!").required("required"),
  address1: yup.string().required("required"),
  address2: yup.string()
})

const Form = () => {
  const isNonMobile = useMediaQuery("(mid-width:600px)")
  const handleFormSubmit = (values) => {
    console.log(values)
  }

  

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="30px" 
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div" : {
                  gridColumn: isNonMobile ? undefined : "span 4"
                }
              }}
            >
              {/* First Name */}
              <TextField 
                fullWidth variant='filled'
                type="text" label="First Name"
                onBlur={handleBlur} onChange={handleChange}
                name="firstName" value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn: "span 2"}}
              />

              {/* Last Name */}
              <TextField 
                fullWidth variant='filled'
                type="text" label="Last Name"
                onBlur={handleBlur} onChange={handleChange}
                name="lastName" value={values.lastName}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn: "span 2"}}
              />

              {/* Email */}
              <TextField 
                fullWidth variant='filled'
                type="email" label="Email Address"
                onBlur={handleBlur} onChange={handleChange}
                name="email" value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 4"}}
              />

              {/* Contact*/}
              <TextField 
                fullWidth variant='filled'
                type="text" label="Contact Number"
                onBlur={handleBlur} onChange={handleChange}
                name="contact" value={values.contact}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn: "span 4"}}
              />

              {/* Address1 */}
              <TextField 
                fullWidth variant='filled'
                type="text" label="Address 1"
                onBlur={handleBlur} onChange={handleChange}
                name="address1" value={values.address1}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{gridColumn: "span 4"}}
              />

              {/* Address2 */}
              <TextField 
                fullWidth variant='filled'
                type="text" label="Address 2"
                onBlur={handleBlur} onChange={handleChange}
                name="address2" value={values.address2}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{gridColumn: "span 4"}}
              />
            </Box>
            <Box className='flex justify-end mt-5'>
              <Button type="submit" color='secondary' variant='contained'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Form