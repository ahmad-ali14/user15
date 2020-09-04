import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Field, Form, Formik } from 'formik';
import { validateId, useStyles } from "./helpers";
import FormTitle from './FormTitle';
import OtherFields from './OtherFields';


export default function CreateUser({ setUser }) {
    const classes = useStyles();

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const result = {
            id: values.id
        };

        values['other-fields'].map((e, i) => {
            if (e.fieldName !== "") {
                result[e.fieldName] = [...e.fieldValues];
            }
        })

        setSubmitting(false);
        // alert(JSON.stringify(result, null, 2));
        setUser(result)
        resetForm();
    };


    const initialValues = {
        id: '',
        'other-fields': [
            {
                fieldName: '',
                'fieldValues': ['']
            }
        ]
    };



    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <FormTitle />
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}>
                    {({ values, isSubmitting, errors, }) => (
                        <>
                            <Form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field name="id" as={TextField}
                                            error={Boolean(errors.id)}
                                            helperText={Boolean(errors.id) ? errors.id : ""}
                                            label="User Id"
                                            variant="outlined"
                                            fullWidth
                                            validate={validateId} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <OtherFields values={values} />
                                    </Grid>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        disabled={isSubmitting}
                                    > Submit User</Button>

                                </Grid>
                            </Form>
                        </>
                    )}
                </Formik>

            </div>
        </Container>
    );
}