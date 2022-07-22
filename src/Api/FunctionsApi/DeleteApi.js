import {DeleteInstanceApi} from "../BaseApi/BaseApi";

export const DeleteMessage = (id, callback) => {
    DeleteInstanceApi().delete(`DeleteMessage.php?id=${id}`)
        .then(
            callback(true)
        )
        .catch(error => {
            console.log(error);
            callback(false);
        })
}

export const DeleteWaitingNewUser = (id, callback) => {
    DeleteInstanceApi().delete(`DeleteWaitingNewUser.php?id=${id}`)
        .then(
            callback(true)
        )
        .catch(error => {
            console.log(error);
            callback(false);
        })
}

export const DeleteUser = (id, callback) => {
    DeleteInstanceApi().delete(`DeleteUser.php?id=${id}`)
        .then(
            callback(true)
        )
        .catch(error => {
            console.log(error);
            callback(false);
        })
}