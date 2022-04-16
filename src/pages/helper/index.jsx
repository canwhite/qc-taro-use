import React from "react"

export default function Helper(){

    const [state,setState] = React.useState("xxx")

    return(
        <div>{state}</div>
    )

}