import { Button, Card, CardActions, CardContent, CardHeader, IconButton, TextField } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';


const CreateModule = () => {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log(values);

        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
        resetForm();
    };

    const handleInsertObject = (pushFunc) => {
        pushFunc({ name: '', 'child-business-objects': [] });
    };
    const initialValues = {
        name: '',
        'business-objects': [
            {
                name: '',
                'child-business-objects': [
                    {
                        name: ''
                    }
                ]
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
                                <CardHeader title="Create New Module" />
                                <CardContent>
                                    <Field name="name" as={TextField} label="Module name" variant="outlined" fullWidth />
                                    <div style={{ border: '1px solid black', padding: '1rem' }}>
                                        <FieldArray name="business-objects">
                                            {({ remove, push }) => (
                                                <div>
                                                    <Button
                                                        color="secondary"
                                                        size="small"
                                                        startIcon={<AddOutlinedIcon />}
                                                        onClick={() => handleInsertObject(push)}
                                                    >
                                                        Object
                          </Button>
                                                    {values['business-objects'].length > 0 &&
                                                        values['business-objects'].map((bo, index) => (
                                                            <div
                                                                key={`bo${index}`}
                                                                style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}
                                                            >
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Field
                                                                        name={`business-objects.${index}.name`}
                                                                        as={TextField}
                                                                        label="Object Name"
                                                                        variant="outlined"
                                                                        fullWidth
                                                                    />

                                                                    <IconButton size="small" onClick={() => remove(index)}>
                                                                        <DeleteIcon color="error" />
                                                                    </IconButton>
                                                                </div>

                                                                <FieldArray name={`business-objects.${index}.child-business-objects`}>
                                                                    {({ remove: removeChildBusinessObject, push: pushChildBusinessObject }) => (
                                                                        <div>
                                                                            <Button
                                                                                color="secondary"
                                                                                size="small"
                                                                                startIcon={<AddOutlinedIcon />}
                                                                                onClick={() => pushChildBusinessObject({ name: '' })}
                                                                            >
                                                                                Child Object
                                      </Button>
                                                                            {bo['child-business-objects'].length > 0 &&
                                                                                bo['child-business-objects'].map((cbo, index_cbo) => (
                                                                                    <div
                                                                                        key={`cbo${index_cbo}`}
                                                                                        style={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center'
                                                                                        }}
                                                                                    >
                                                                                        <Field
                                                                                            name={`business-objects.${index}.child-business-objects.${index_cbo}.name`}
                                                                                            as={TextField}
                                                                                            label="Child Name"
                                                                                            variant="outlined"
                                                                                            fullWidth
                                                                                        />
                                                                                        <IconButton size="small" onClick={() => removeChildBusinessObject(index_cbo)}>
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
