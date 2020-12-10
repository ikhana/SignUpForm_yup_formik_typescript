import React from "react";
import TextField from "@material-ui/core/TextField";
import {ErrorMessage, Field} from "formik";
import './FormField.css'


interface FormFieldProps {
    name: string;
    label: string;
    password: string;
    passlabel:string
  


}


const FormField: React.FC<FormFieldProps> = ({name,label,password,passlabel}) => {
    return (
        <div className="FormField">
            <Field
            as ={TextField}
            name={name}
            label={label}
            fullWidth
            helperText={<ErrorMessage name={name}/>}
            required/>
            <Field
            as ={TextField}
            name={password}
            label={passlabel}
            fullWidth
            helperText={<ErrorMessage name={password}/>}
            required/>
           
           
       </div>
    )
}

export default FormField;