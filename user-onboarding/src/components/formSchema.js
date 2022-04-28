import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required("first name required"),
    lastName: yup
        .string()
        .trim()
        .required("last name required"),
    email: yup
        .string()
        .trim()
        .required("email required"),
    password: yup
        .string()
        .trim()
        .required("password required"),
    termsAndConditions: yup.boolean()
    
})

export default formSchema