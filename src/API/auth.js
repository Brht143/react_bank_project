import instance from "./api";
import { setToken } from "./storage"

const register = async ({username, password, image}) => {
    const data = await instance.post("/mini-project/api/auth/register", {username, password, image});
    setToken(data.token);
    console.log("register data", data)
    return data;
};
const login = async ({username, password}) => {
    const data = await instance.post("/mini-project/api/auth/login", {username, password});
    setToken(data.token);
    console.log("login data", data)
    return data;
};


export { register, login};