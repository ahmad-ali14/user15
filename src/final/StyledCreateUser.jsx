import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';

import { Field, FieldArray, Form, Formik } from 'formik';

import { Card, CardActions, CardContent, CardHeader, IconButton } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log(values);
        const result = {
            id: values.id
        };

        values['other-fields'].map((e, i) => {
            if (e.fieldName !== "") {
                result[e.fieldName] = [...e.fieldValues];
            }
        })

        setSubmitting(false);
        alert(JSON.stringify(result, null, 2));
        resetForm();
    };
    const handleInsertObject = (pushFunc) => {
        pushFunc({ fieldName: '', 'fieldValues': [''] });
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
                <Avatar className={classes.avatar}>
                    <EmojiPeopleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create User
        </Typography>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, isSubmitting }) => (
                        <>
                            <Form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field name="id" as={TextField} label="User Id" variant="outlined" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FieldArray name="other-fields">
                                            {({ remove, push }) => (
                                                <>


                                                    {values['other-fields'].length > 0 &&
                                                        values['other-fields'].map((bo, index) => (
                                                            <>
                                                                <Grid container spacing={2} >
                                                                    <Grid item xs={12} sm={6}>
                                                                        <Field
                                                                            name={`other-fields.${index}.fieldName`}
                                                                            as={TextField}
                                                                            label="Field Name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                        />
                                                                        <Button
                                                                            color="secondary"
                                                                            size="small"
                                                                            onClick={() => remove('')}
                                                                        >
                                                                            <RemoveIcon /> Remove Field
                                                                                    </Button>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>

                                                                        <FieldArray name={`other-fields.${index}.fieldValues`}>
                                                                            {({ remove, push }) => (
                                                                                <>
                                                                                    <Grid container spacing={2} >

                                                                                        {bo['fieldValues'].length > 0 &&
                                                                                            bo['fieldValues'].map((cbo, index_cbo) => (
                                                                                                <>
                                                                                                    {index_cbo === 0 ? (
                                                                                                        <Grid item xs={12} >
                                                                                                            <Field
                                                                                                                name={`other-fields.${index}.fieldValues.${index_cbo}`}
                                                                                                                as={TextField}
                                                                                                                label={`Field value ${index_cbo + 1} `}
                                                                                                                variant="outlined"
                                                                                                                fullWidth
                                                                                                            />
                                                                                                        </Grid>
                                                                                                    ) : (
                                                                                                            <>
                                                                                                                <Grid item xs={11} >
                                                                                                                    <Field
                                                                                                                        name={`other-fields.${index}.fieldValues.${index_cbo}`}
                                                                                                                        as={TextField}
                                                                                                                        label={`Field value ${index_cbo + 1} `}
                                                                                                                        variant="outlined"
                                                                                                                        fullWidth
                                                                                                                    />
                                                                                                                </Grid>

                                                                                                                <IconButton size="small" onClick={() => {
                                                                                                                    if (index_cbo > 0) { remove(index_cbo) }

                                                                                                                }}>
                                                                                                                    <HighlightOffIcon color="error" />
                                                                                                                </IconButton>
                                                                                                            </>
                                                                                                        )
                                                                                                    }

                                                                                                </>
                                                                                            ))}

                                                                                    </Grid>
                                                                                    <Grid container spacing={2}  >
                                                                                        <Grid item xs={12}>
                                                                                            <Button
                                                                                                color="secondary"
                                                                                                size="small"
                                                                                                onClick={() => push('')}
                                                                                            >
                                                                                                <AddBoxIcon /> Add
                                                                                    </Button>
                                                                                        </Grid>
                                                                                    </Grid>



                                                                                </>
                                                                            )}
                                                                        </FieldArray>
                                                                    </Grid>
                                                                </Grid>


                                                                <hr style={{ margin: "1%" }} />



                                                            </>
                                                        ))}

                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <Button
                                                                color="secondary"
                                                                size="small"
                                                                onClick={() => handleInsertObject(push)}
                                                            ><AddBoxIcon /> Add Another Field </Button>
                                                        </Grid>
                                                    </Grid>


                                                </>
                                            )}
                                        </FieldArray>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
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