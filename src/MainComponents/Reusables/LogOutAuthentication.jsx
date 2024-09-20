export const LogOutAuthentication = () => {
  sessionStorage.clear();
  window.location.pathname = "/";
};
