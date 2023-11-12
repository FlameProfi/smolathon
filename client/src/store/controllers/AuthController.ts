import axios from "axios";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";
import { setIsAuth, setLoading, setUser } from "../reducers/AuthSlice";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";

export class AuthController {
    static async login(email: string, password: string, username: string) {
        try {
            const response = await AuthService.login(email, password, username);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            setUser(response.data.user);
        } catch (e) {
            console.log(e)
        }
    }

    static async registration(email: string, password: string, username: string) {
        try {
            const response = await AuthService.registration(email, password, username);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    static async logout() {
        try {
            localStorage.removeItem('token');
            setIsAuth(false);
            setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    }

    static async checkAuth() {
        setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            // setUser(response.data.user);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
}