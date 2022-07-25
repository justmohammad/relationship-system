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