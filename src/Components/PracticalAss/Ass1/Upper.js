import React, { useState } from 'react';

function Upper() {
    const [data, setData] = useState("Enter any text");

    function Gettext(e) {
        setData(e.target.value);
        // Log the value after updating
        console.log(e.target.value);
    }

    function Getuppertext() {
        let upperText = data.toUpperCase();
        setData(upperText);
    }

    function Getlowertext() {
        let lowerText = data.toLowerCase();
        setData(lowerText);
    }

    return (
        <div>
            <center>
                <h1>Get Input Value</h1>
                <label>Type your name</label><br></br>
                <input type="text" value={data} onChange={Gettext} />
                <button onClick={Getuppertext}>Upper</button>
                <button onClick={Getlowertext}>Lower</button>
                <strong><p>{data}</p></strong>
            </center>
        </div>
    );
}

export default Upper;
