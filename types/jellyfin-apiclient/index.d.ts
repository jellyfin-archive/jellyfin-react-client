declare class ApiClient {
  constructor(
    storage: null,
    address: null | string,
    name: string,
    version: string,
    foo: string,
    bar: string,
    baz: string,
  )

  getPublicSystemInfo: () => Promise<any>
  getResumableItems: (userId: string) => Promise<any>
  authenticateUserByName: (username: string, password: string) => Promise<any>
  setAuthenticationInfo: (accessToken?: string, userId?: string) => void
  isLoggedIn: () => boolean
}

declare module "jellyfin-apiclient/dist/apiclient" {
  export = ApiClient

}
