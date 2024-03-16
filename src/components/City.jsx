import React from "react";
import { useParams } from "react-router-dom";

const City = () => {
    const {cityId} = useParams();
    return(
        <>
        <div>{`Estoy en city ${cityId}`}</div>
        </>
    );
};

export default City;