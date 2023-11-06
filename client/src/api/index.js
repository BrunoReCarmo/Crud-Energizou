import { BackendURL } from "../utils";

export const routes = {
  login: {
    add: `${BackendURL}/login`,
  },
  empresas: {
    get: `${BackendURL}/select/empresas`,
    add: `${BackendURL}/insert/empresas`,
    drop: `${BackendURL}/delete/empresas`,
    updt: `${BackendURL}/update/empresas`,
  },
};
