import {GetInstanceApi} from "../BaseApi/BaseApi";

export const GetAllUsers = (callback) => {
    GetInstanceApi().get("GetAllUsers.php")
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const GetReceiveMessages = (data, callback) => {
    GetInstanceApi().post("GetReceiveMessages.php",data)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const GetSentMessages = (data, callback) => {
    GetInstanceApi().post("GetSentMessages.php", data)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const LoginUser = (data, callback) => {
    GetInstanceApi().post(`LoginUser.php`, data)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const GetAllWaitingNewUser = (callback) => {
    GetInstanceApi().get("GetAllWaitingNewUser.php")
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const GetAdmin = (callback) => {
    GetInstanceApi().get("GetAdmin.php")
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}