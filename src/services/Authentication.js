import axios from "axios";
import qs from "querystring";
import config from "../config";

export default async function authorize() {
  return new Promise((resolve, reject) => {
    axios
      .post(
        config.api.authUrl,
        qs.stringify({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              `${config.api.clientId}:${config.api.clientSecret}`
            )}`,
          },
        }
      )
      .then((result) => {
        resolve(result.data.access_token);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
