import {
    Get_All_Contact,
    GET_CONTACT,
    Toggle_false,
    Toggle_true,
} from "../constant/Action_types";

const initstate = {
    Contact: [],
    isEdit: false,
    user: {},
};

function ContactReducer(State = initstate, { type, payload }) {
    switch (type) {
        case Get_All_Contact:
            return { ...State, Contact: payload };
        case Toggle_true:
            return { ...State, isEdit: true };
        case Toggle_false:
            return { ...State, isEdit: false };
        case GET_CONTACT:
            return { ...State, user: payload };
        default:
            return State;
    }
}

export default ContactReducer;
