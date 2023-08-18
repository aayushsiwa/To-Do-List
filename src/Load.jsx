import React from "react";

export default function Load() {
    return (
        <div className="spinner">
            <span>Loading</span>
            <div className="spinner-sector spinner-sector-red"></div>
            <div className="spinner-sector spinner-sector-green"></div>
            <div className="spinner-sector spinner-sector-blue"></div>
            <div className="spinner-sector spinner-sector-yellow"></div>
        </div>
    );
}
