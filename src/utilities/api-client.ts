import ApiClient from 'jellyfin-apiclient/dist/apiclient';

let apiClient: ApiClient = new ApiClient(null, "-", "Jellyfin WebNG", "0.0.1", "WebNG", "WebNG", "")

export function getApiClient(): ApiClient {
  return apiClient
}

export function setApiClient(client: ApiClient) {
  apiClient = client;
}
