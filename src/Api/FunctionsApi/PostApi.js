import {PostInstanceApi} from "../BaseApi/BaseApi";
import Axios from "axios";

export const SignUpUser = (data, callback) => {
    PostInstanceApi().post(`SignUpUser.php`, data)
        .then(
            callback(true)
        ).catch(error => {
        console.log(error);
        callback(false);
    })
}

export const AddUser = (data, callback) => {
    PostInstanceApi().post(`AddUser.php`, data)
        .then(
            callback(true)
        ).catch(error => {
        console.log(error);
        callback(false);
    })
}

export const SubmitMessage = (data, callback) => {
    PostInstanceApi().post(`SendMessage.php`, data)
        .then(
            callback(true)
        ).catch(error => {
        console.log(error);
        callback(false);
    })
}