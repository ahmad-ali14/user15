import { Button, Card, CardActions, CardContent, CardHeader, IconButton, TextField } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';

const CreateModule = () => {
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
        pushFunc({ fieldName: '', 'fieldValues': [] });
    };

    const initialValues = {
        id: '',
        'other-fields': [
            {
                fieldName: '',
                'fieldValues': []
            }
        ]
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, isSubmitting }) => (
                    <>
                        <Form style={{ width: '100%' }}>
                            <Card raised style={{ width: '100%' }}>
                                <CardHeader title="Create New User" />
                                <CardContent>
                                    <Field name="id" as={TextField} label="Id" variant="outlined" fullWidth />
                                    <div style={{ border: '1px solid black', padding: '1rem' }}>
                                        <FieldArray name="other-fields">
                                            {({ remove, push }) => (
                                                <div>
                                                    <Button
                                                        color="secondary"
                                                        size="small"
                                                        startIcon={<AddOutlinedIcon />}
                                                        onClick={() => handleInsertObject(push)}
                                                    >
                                                        Add Another Field
                          </Button>
                                                    {values['other-fields'].length > 0 &&
                                                        values['other-fields'].map((bo, index) => (
                                                            <div
                                                                key={`bo${index}`}
                                                                style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}
                                                            >
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Field
                                                                        name={`other-fields.${index}.fieldName`}
                                                                        as={TextField}
                                                                        label="Field Name"
                                                                        variant="outlined"
                                                                        fullWidth
                                                                    />

                                                                    <IconButton size="small" onClick={() => remove(index)}>
                                                                        <DeleteIcon color="error" />
                                                                    </IconButton>
                                                                </div>

                                                                <FieldArray name={`other-fields.${index}.fieldValues`}>
                                                                    {({ remove, push }) => (
                                                                        <div>
                                                                            <Button
                                                                                color="secondary"
                                                                                size="small"
                                                                                startIcon={<AddOutlinedIcon />}
                                                                                onClick={() => push('')}
                                                                            >
                                                                                Add Array Element
                                      </Button>
                                                                            {bo['fieldValues'].length > 0 &&
                                                                                bo['fieldValues'].map((cbo, index_cbo) => (
                                                                                    <div
                                                                                        key={`cbo${index_cbo}`}
                                                                                        style={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center'
                                                                                        }}
                                                                                    >
                                                                                        <Field
                                                                                            name={`other-fields.${index}.fieldValues.${index_cbo}`}
                                                                                            as={TextField}
                                                                                            label="Child Name"
                                                                                            variant="outlined"
                                                                                            fullWidth
                                                                                        />
                                                                                        <IconButton size="small" onClick={() => remove(index_cbo)}>
                                                                                            <DeleteIcon color="error" />
                                                                                        </IconButton>
                                                                                    </div>
                                                                                ))}
                                                                        </div>
                                                                    )}
                                                                </FieldArray>
                                                            </div>
                                                        ))}
                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button type="submit" color="primary" variant="contained" disabled={isSubmitting} size="small">
                                        Submit
                  </Button>
                                </CardActions>
                            </Card>
                        </Form>

                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </>

                )}


            </Formik>
        </div>
    );
};

export default CreateModule;
