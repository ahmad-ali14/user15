import React, { useState } from 'react';
import MyField from "./MyField";


function CreateUser() {
    const [fields, setFields] = useState({ id: "" });
    const [count, setCount] = useState(1);

    const addField = () => {
        setCount(count + 1);
        setFields({ ...fields, [`newField${count}`]: [] })
    }

    const changeKey = (e, i) => {

        const stateKeys = Object.keys(fields);
        const new_key = e.target.value;

        const old_key = stateKeys[i];

        if (old_key !== new_key) {
            Object.defineProperty(fields, new_key,
                Object.getOwnPropertyDescriptor(fields, old_key));
            delete fields[old_key];
        }


    }

    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms, 5 second for example

    //on keyup, start the countdown
    const waitAbitOnKeyUp = (e, i) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => doneTyping(e, i), doneTypingInterval);
    };

    //on keydown, clear the countdown 
    const waitAbitOnKeyDown = () => {
        clearTimeout(typingTimer);
    };

    //user is "finished typing," do something
    function doneTyping(e, i) {
        //do something


        setFields({ ...fields });

    }


    const saveArray = (arr, f) => {
        console.log('fields f', f);

        setFields({ ...fields, [f]: arr });

        console.log('fields....', fields);


    }

    const submitForm = () => {
        alert(JSON.stringify(fields, null, 2));
    }

    return (
        <>
            <table style={{ margin: "auto", padding: "5%" }}>
                <tbody>

                    {Object.keys(fields).map((f, i) => {
                        return (
                            <tr key={`${f}.${i}`}>
                                {f === "id" ? (
                                    <>
                                        <td>
                                            <input value="id" disabled />
                                        </td>
                                        <td>
                                            <input value={fields["id"]} onChange={(e) => { setFields({ ...fields, id: e.target.value }) }} />
                                        </td>
                                    </>
                                ) : (
                                        <>
                                            <td>
                                                <input onChange={(e) => changeKey(e, i)} defaultValue={f} onKeyUp={(e) => waitAbitOnKeyUp(e, i)} onKeyDown={waitAbitOnKeyDown} />
                                            </td>
                                            <td> <MyField fieldName={f} saveArray={saveArray} /> </td>
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
                            <button style={{ color: "white", background: "green" }} onClick={submitForm}>Submit Form</button>
                        </td>
                    </tr>
                </tbody>

            </table>

        </>
    )
}

export default CreateUser;


