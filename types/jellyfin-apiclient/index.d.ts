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
  getResumableItems: (userId: string) => Promise<any>
  isLoggedIn: () => Boolean
}

declare module "jellyfin-apiclient/dist/apiclient" {
  export = ApiClient
}
