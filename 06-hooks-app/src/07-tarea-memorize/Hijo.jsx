/* eslint-disable react/display-name */
import { memo } from "react";

/* eslint-disable react/prop-types */
memo
export const Hijo =memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mx-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
