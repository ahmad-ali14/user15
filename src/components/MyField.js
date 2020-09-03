import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';


const MyField = ({ fieldName, saveArray }) => {
    return (
        <div>
            <Formik
                initialValues={{ [fieldName]: ['',] }}
                onSubmit={values => {
                    if (!fieldName || fieldName === "") { return; }
                    saveArray(...Object.values(values), fieldName)
                }}
                render={({ values }) => (
                    <Form>
                        <FieldArray
                            name={fieldName}
                            render={arrayHelpers => (
                                <div>
                                    {values[fieldName] && values[fieldName].length > 0 ? (
                                        values[fieldName].map((friend, index) => (
                                            <div key={index}>
                                                <Field name={`${fieldName}.${index}`} />
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                >
                                                    -
                          </button>
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                >
                                                    +
                          </button>
                                            </div>
                                        ))
                                    ) : (
                                            <button type="button" onClick={() => arrayHelpers.push('')}>
                                                {/* show this when user has removed all friends from the list */}
                        Add a friend
                                            </button>
                                        )}
                                    <div>
                                        <button type="submit">save Field</button>
                                    </div>
                                </div>
                            )}
                        />
                    </Form>
                )}
            />
        </div>
    );
}

export default MyField;