import { useContext } from "react";

import { AuthContext } from "./auth-context";

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be user within an AuthContext");
    }

    return authContext;
};
