import { ApiClient } from 'jellyfin-apiclient';

const JFInterface = {
    apiClient: undefined,

    connect: function (address) {
        this.apiClient = new ApiClient(null, address, "Jellyfin WebNG", '0.0.1', 'WebNG', 'WebNG', '')
    }
}

export default JFInterface;
