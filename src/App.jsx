import React, { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form";
import List from "./List";
import Load from "./Load";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tos, setTo] = useState(() => {
        const localstorage = localStorage.getItem("ITEMS");
        return localstorage ? JSON.parse(localstorage) : [];
    });

    useEffect(() => {
        setTimeout(() => {
            const localstorage = localStorage.getItem("ITEMS");
            if (localstorage) {
                setTo(JSON.parse(localstorage));
            }
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tos));
    }, [tos]);

    function addTo(title) {
        setTo((currentTos) => {
            return [
                ...currentTos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    }

    function toggleTo(id, completed) {
        setTo((currentTos) => {
            return currentTos.map((to) => {
                if (to.id === id) {
                    return { ...to, completed };
                }
                return to;
            });
        });
    }

    function deleteTo(id) {
        setTo((currentTos) => {
            return currentTos.filter((to) => to.id !== id);
        });
    }
    return (
        <>
            {isLoading ? (
                <Load />
            ) : (
                <>
                    <Form addTo={addTo} />
                    <h1 className="header">To-Do List</h1>
                    <List tos={tos} toggleTo={toggleTo} deleteTo={deleteTo} />
                </>
            )}
        </>
    );
}
