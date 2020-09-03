import React, { useState } from 'react';
import MyField from "./MyField";

import { Formik, Form, Field, FieldArray } from 'formik';



function CreateUserFormik() {
    const [state, setState] = useState({ id: "" });
    const [count, setCount] = useState(1);

    const addField = () => {
        setCount(count + 1);
        setState({ ...state, [`newField${count}`]: [] })
    }

    const changeKey = (e, i) => {

        const stateKeys = Object.keys(state);
        const new_key = e.target.value;

        const old_key = stateKeys[i];

        if (old_key !== new_key) {
            Object.defineProperty(state, new_key,
                Object.getOwnPropertyDescriptor(state, old_key));
            delete state[old_key];
        }


    }

    return (
        <>
            <Formik
                initialValues={state}
                // onSubmit={values => {
                //     console.log(values);
                // }}
                render={({ values }) => (
                    <>
                        <Form>
                            <table style={{ margin: "auto", padding: "5%" }}>
                                <tbody>

                                    {Object.keys(values).map((f, i) => {
                                        return (
                                            <tr key={`${f}.${i}`}>
                                                {f === "id" ? (
                                                    <>
                                                        <td>
                                                            <input value="id" disabled />
                                                        </td>
                                                        <td>
                                                            <input value={values["id"]} onChange={(e) => { values["id"] = e.target.value }} />
                                                        </td>
                                                    </>
                                                ) : (
                                                        <>
                                                            <td>
                                                                <input onChange={(e) => { changeKey(e, i) }} defaultValue={f} />
                                                            </td>
                                                            <td><FieldArray /></td>
                                                        </>
                                                    )}
                                            </tr>
                                        )
                                    })}

                                    <tr>
                                        <td>
                                            <button onClick={addField}>Add Another Field</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <button style={{ color: "white", background: "green" }} type="submit">Submit Form</button>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </Form>

                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </>
                )}
            />

        </>
    )
}

export default CreateUserFormik;


