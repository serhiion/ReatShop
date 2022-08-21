import React from "react";

interface ErrorProps{
    error: string
}

export function Error({error}: ErrorProps){
    return(
        <p className="text-center text-red-700">{error}</p>
    )
}