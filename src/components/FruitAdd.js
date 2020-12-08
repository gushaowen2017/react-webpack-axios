import React, { useState } from "react";

export default function FruitAdd ({ fruits, addFruit }) {
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => addFruit(name)}>add</button>
        </div>
    );
}