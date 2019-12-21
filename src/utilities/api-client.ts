import ApiClient from 'jellyfin-apiclient/dist/apiclient';

let apiClient: ApiClient

export function getApiClient(): ApiClient {
  return apiClient
}

export function setApiClient(client: ApiClient) {
  apiClient = client;
}
