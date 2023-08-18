import { React, useState } from "react";
import someJson from "./tasks.jsx";

const a = Math.floor(Math.random() * 10);

export default function Form(props) {
    const [newItem, setNewItem] = useState("");
    const [error, setError] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    // setNewItem("Se")
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") {
            return (
                <>
                    {setError("Please enter something")};
                    {setIsAlertVisible(true)};
                    {setTimeout(function (e) {
                        // e.preventDefault();
                        setError("");
                        setIsAlertVisible(false);
                    }, 3000)}
                </>
            );
        }
        props.addTo(newItem);
        setNewItem("");
    }
    return (
        <>
            {isAlertVisible && <span className="alert form-row">{error}</span>}
            <form onSubmit={handleSubmit} className="new-item-form">
                {/* <span className="alert">{error}</span> */}
                <div className="form-row">
                    <label htmlFor="item" className="item">
                        <span>New Item</span>
                    </label>
                    <input
                        type="text"
                        id="item"
                        placeholder={someJson[a].title}
                        value={newItem}
                        onChange={(e) => {
                            setNewItem(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn">
                    Add
                </button>
            </form>
        </>
    );
}
