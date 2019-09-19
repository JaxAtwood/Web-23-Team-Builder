import React, { useState } from "react";

const BandSubForm = props => {
    const [subForm, setSubForm] = useState({bandname: "", origin: "", genre: "", note: ""});

    const changeHandler = event => {
        setSubForm({...subForm, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
            const bandSub = {...subForm, id: Date.now()
        };
        props.addNewSubmission(bandSub);
        setSubForm({bandname: "", origin: "", genre: "", note: ""});
    };

    return (
        <form onSubmit = {submitForm}>
            <label htmlFor="bandname">BandName</label>
            <input
                type= "text"
                name= "bandname"
                placeholder= "Testing Bandname"
                value= {subForm.bandname}
                onChange= {changeHandler}/>

            <label htmlFor="origin">Band's Origin:</label>
            <input
                type= "text"
                name= "origin"
                placeholder= "Testing Origin"
                value= {subForm.origin}
                onChange= {changeHandler}/>

            <label htmlFor="origin">Band's Genre:</label>
            <input
                type= "text"
                name= "genre"
                placeholder= "Testing Genre"
                value= {subForm.genre}
                onChange= {changeHandler}/>

            <label htmlFor="origin">What makes your band so great?!?!</label>
            <textarea
                type= "text"
                name= "note"
                placeholder= "Argument goes here"
                value= {subForm.note}
                onChange= {changeHandler}/>

            <button type= "submit">Click Me!</button>
        </form>
    );
};

export default BandSubForm;