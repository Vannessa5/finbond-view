// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const BASE_URL ='http://localhost:2000'
export const environment = {
  production: false,
  LOGIN_URL: `${BASE_URL}api/user/authenticate`,
  ROLE_URL: `${BASE_URL}/api/role`,
  USER_URL: `${BASE_URL}/api/user`
};
