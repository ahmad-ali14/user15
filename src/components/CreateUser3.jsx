import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';


export const CreateUser3 = () => {
    const [count, setCount] = useState(1);

    const changeKey = (obj, e, f) => {
        const new_key = e.target.value;
        const old_key = f;
        // console.log('obj >>>>>>>>>>>>>> ', obj);
        const desc = Object.getOwnPropertyDescriptor(obj, old_key);

        console.log("desc >>> ", desc)

        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..    ", "new_key", new_key, "old_key", old_key)

        if (old_key !== new_key) {
            Object.defineProperty(obj, new_key,
                {
                    value: desc.value,
                    configurable: false,
                    enumerable: false,
                    writable: false
                });
            delete obj[old_key];
        }


    }



    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms, 5 second for example

    //on keyup, start the countdown
    const waitAbitOnKeyUp = (obj, e, i) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => changeKey(obj, e, i), doneTypingInterval);
    };

    //on keydown, clear the countdown 
    const waitAbitOnKeyDown = () => {
        clearTimeout(typingTimer);
    };

    // //user is "finished typing," do something
    // function doneTyping(e, i) {
    //     //do something


    //     setFields({ ...fields });

    // }

    return (
        < div style={{ margin: "5%" }}>
            <h1>Add User 3 </h1>
            <Formik
                initialValues={{ id: "", }}
                onSubmit={values =>
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500)
                }
                render={({ values, ...rest }) => (
                    <>
                        {/* {console.log(rest)} */}

                        <Form>

                            {Object.keys(values).map((k, i) => {

                                return k === "id" ? (
                                    <Field key={`${k}-field-id-${i}`} name="id" render={arrayHelpers =>
                                        <>
                                            <label> id: </label>
                                            <Field name="id" value={values.id} onChange={rest.handleChange} />
                                            {/* {console.log(arrayHelpers)} */}
                                            <hr />
                                        </>
                                    }
                                    />
                                ) : (
                                        <FieldArray
                                            name={k}
                                            key={`${k}-field-array-${i}`}
                                            render={arrayHelpers => (
                                                <div>
                                                    <label>
                                                        <input value={k}
                                                            onKeyUp={(e) => {
                                                                e.persist();
                                                                // console.log("input changed >>>>", e.target.value); 
                                                                waitAbitOnKeyUp(values, e, k);
                                                            }}
                                                            onKeyDown={waitAbitOnKeyDown} onChange={(e) => {
                                                                e.persist();
                                                                changeKey(values, e, k)
                                                                // console.log('rrrrrrrrr', e.target.value)
                                                            }} />:
                                                     </label>
                                                    {
                                                        values[k] && values[k].length > 0 ?
                                                            (
                                                                values[k].map((friend, index) => (
                                                                    <div key={index}>
                                                                        <Field name={`${k}.${index}`} />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => arrayHelpers.remove(index)} > - </button>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => arrayHelpers.insert(index, '')} > + </button>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <button type="button" onClick={() => arrayHelpers.push('')}> Add first field </button>
                                                            )}

                                                    <hr />
                                                </div>
                                            )}
                                        />)
                            })

                            }


                            <div style={{ margin: "1%" }} >
                                <button style={{ color: "white", backgroundColor: "blue" }} onClick={() => {
                                    setCount(count + 1);
                                    Object.assign(values, { [`key${count}`]: [" "] })
                                }} type="button"> Add Another Field</button>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </>
                )}
            />
        </div >
    )
};

export default CreateUser3;