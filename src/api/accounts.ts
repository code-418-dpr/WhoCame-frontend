import axios, { AxiosResponse } from "axios";

import { Envelope } from "@/models/envelope";
import { LoginResponse } from "@/models/login-response";

import { API_URL, api } from "./api";

export class AccountsService {
    static async refresh() {
        return axios.post<Envelope<LoginResponse>>(
            API_URL + "Account/refreshing",
            {},
            {
                withCredentials: true,
            },
        );
    }

    static async login(email: string, password: string): Promise<AxiosResponse<Envelope<LoginResponse>>> {
        return api.post<Envelope<LoginResponse>>("Account/authentification", {
            email,
            password,
        });
    }

    static async logout() {
        return api.post("Account/deletion");
    }
}
