import React from "react";
import { FieldArray, Field } from "formik";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';



export default function ChildOtherFields({ index, bo, }) {


    return (
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
    );
}