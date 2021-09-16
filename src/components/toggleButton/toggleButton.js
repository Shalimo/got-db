import React from "react"
import { Button } from "reactstrap"

const ToggleButton = ({toggle}) => {
    return (
        <Button className="line random-block" onClick={toggle}>Toggle button</Button>
    )   
}

export default ToggleButton;