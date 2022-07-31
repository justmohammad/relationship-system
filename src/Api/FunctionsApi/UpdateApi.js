import {UpdateInstanceApi} from "../BaseApi/BaseApi";

export const UpdateStatusMessage = (data, callback) => {
    UpdateInstanceApi().post(`UpdateMessage.php`, data)
        .then(
            callback(true)
        ).catch(error => {
        console.log(error);
        callback(false);
    })
}

export const UploadImageProfile = (data, callback) => {
    UpdateInstanceApi().post("UploadImageProfile.php", data)
        .then(Response => {
            const data = Response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}