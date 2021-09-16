import React from "react"
import "./error.css"

const ErrorMesage = () => {
    return (
        <>
        <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img>
        <span>Something went wrong</span>
        </>
    )
}

export default ErrorMesage;