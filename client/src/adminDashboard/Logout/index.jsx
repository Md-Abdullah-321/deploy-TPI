import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../app';

const AdminLogout = () => {
    const {state, dispatch} = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
     fetch('/admin/logout', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
     }).then((res) => {
        dispatch({type: "STUDENT", payload: null});
        navigate('/');
        console.log(state);
     }).catch(e => console.log("logout error"));
    });

    return (
        <>
        </>
    )
}

export default AdminLogout;