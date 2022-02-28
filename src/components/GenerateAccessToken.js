import axios from "axios";

export const getAccessToken = (token) => {
  return axios
    .post("https://api.powerbi.com/v1.0/myorg/GenerateToken", {
      datasets: [
        {
          id: "fcda5b5f-9fe0-4a8d-aa8d-4d67ed9ca86a",
        },
      ],
      reports: [
        {
          allowEdit: false,
          id: "f97c19c2-87be-4be6-a7a5-24b6c3aca493",
        },
      ],
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err, "didnt work");
    });
};
