/* eslint-disable react/display-name */
import { memo } from "react";

/* eslint-disable react/prop-types */
memo
export const Hijo = memo(({ numero, incrementar }) => {

    return (
        <button
            className="btn btn-primary mx-2"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
