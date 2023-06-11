import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../app';

const Logout = () => {
    const {state, dispatch} = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
     fetch('/logout', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
     }).then((res) => {
        dispatch({type: "STUDENT", payload: false});
        navigate('/');
     }).catch(e => console.log("logout error"));
    });

    return (
        <>
        </>
    )
}

export default Logout;