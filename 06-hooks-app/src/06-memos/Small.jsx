/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from "react"

const Small = memo(({ value }) => {

    console.log("Haz hecho click!");

    return (
        <div>{value}</div>
    )
})

export default Small