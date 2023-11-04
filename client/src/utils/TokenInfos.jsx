import jwt_decode from "jwt-decode";

export function useDecodedToken() {
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwt_decode(token) : null;
    return decodedToken;
}
