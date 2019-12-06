declare class ApiClient {
  constructor(
    storage: null,
    address: string,
    name: string,
    version: string,
    foo: string,
    bar: string,
    baz: string,
  )

  getPublicSystemInfo: () => Promise<any>
}

declare module "jellyfin-apiclient/dist/apiclient" {
  export = ApiClient
}
