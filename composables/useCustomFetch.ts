import axios from "axios";
export default async function useCustomFetch(
  url: string,
  options: RequestInit | any = {}
) {
  const { public: api } = useRuntimeConfig();
  const baseUrl = api.apiBase;
  // get token
  // const { token } = useAuth();
  interface config {
    method?: string;
    headers?: object;
    body?: any;
  }

  let config: config = {
    headers: {
      // Authorization: `${token.value ? token.value : null}`, // Pass the bearer token
      "Content-Type": "application/json", // Optional: specify content type
    },
  };
  if (options) {
    config = {
      ...config,
      ...options,
      headers: { ...config.headers, ...options.headers },
    };
  }

  // Prepend base URL to the provided URL
  const fullUrl = `${baseUrl}${url}`;
  if (config.method) {
    switch (config.method.toLocaleLowerCase()) {
      case "get":
        return await axios.get(fullUrl, config);
      case "post":
        return await axios.post(fullUrl, config.body, config);
      case "patch":
        return await axios.patch(fullUrl, config.body, config);
      case "put":
        return await axios.put(fullUrl, config.body, config);
      case "delete":
        return await axios.delete(fullUrl, config);

      default:
        return await axios(fullUrl, config);
    }
  } else {
    return await axios(fullUrl, config);
  }
};
