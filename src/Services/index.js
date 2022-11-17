import HttpClient from "../Config/httpClient";

function login(payload) {
  return HttpClient({
    url: "login/employee",
    method: "POST",
    data: {
      ...payload,
    },
  });
}
function atten() {
  //
}

const Services = {
  login,
  atten,
};
export default Services;
