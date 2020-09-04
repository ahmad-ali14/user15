import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';
import { FieldArray, Field } from "formik";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ChildOtherFields from "./ChildOtherFields"




export default function OtherFields({ values }) {

    const handleInsertObject = (pushFunc) => {
        pushFunc({ fieldName: '', 'fieldValues': [''] });
    };


    return (
        <FieldArray name="other-fields">
            {({ remove, push }) => (
                <>


                    {values['other-fields'].length > 0 &&
                        values['other-fields'].map((bo, index) => (
                            <React.Fragment key={`other-fields-${index}`}>
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

                                        <ChildOtherFields index={index} bo={bo} />
                                    </Grid>
                                </Grid>


                                <hr style={{ margin: "1%" }} />



                            </React.Fragment>
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
    )
}