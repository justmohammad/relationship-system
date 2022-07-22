import Axios from "axios";

export const PostInstanceApi = () => {
    return Axios.create({
        baseURL : "http://relapp.freehost.io/restApi/PostApi/"
    })
}

export const GetInstanceApi = () => {
    return Axios.create({
        baseURL : "http://relapp.freehost.io/restApi/GetApi/"
    })
}

export const DeleteInstanceApi = () => {
    return Axios.create({
        baseURL : "http://relapp.freehost.io/restApi/DeleteApi/"
    })
}