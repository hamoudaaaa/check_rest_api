import axios from "axios";
import {
    Get_All_Contact,
    GET_CONTACT,
    Toggle_false,
    Toggle_true,
} from "../constant/Action_types";

export const getContact = () => async (dispatch) => {
    try {
        const res = await axios.get("/rest");
        dispatch({ type: Get_All_Contact, payload: res.data.user });
    } catch (error) {
        console.log(error);
    }
};
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post("/rest/add", newContact);
        dispatch(getContact());
    } catch (error) {
        console.log(error);
    }
};
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/rest/${id}`);
        dispatch(getContact());
    } catch (error) {
        console.log(error);
    }
};

export const toggle_true = () => {
    return {
        type: Toggle_true,
    };
};
export const toggle_false = () => {
    return {
        type: Toggle_false,
    };
};
export const getcontactss = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/rest/${id}`);
        dispatch({ type: GET_CONTACT, payload: res.data.usera });
    } catch (error) {
        console.log(error);
    }
};
export const editcontact = (id, contact) => async (dispatch) => {
    try {
        await axios.put(`/rest/${id}`, contact);
        ///dima traja3 ll getcontact lowlaaa
        dispatch(getContact());
    } catch (error) {
        console.log(error);
    }
};
