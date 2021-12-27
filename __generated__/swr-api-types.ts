import { NextApiHandler } from "next";
import { Fetcher, SWRResponse } from "swr";
import ___pages_api_admin_list from "../pages/api/admin/list";
import ___pages_api_users from "../pages/api/users";


type InferNextApiHandlerResponseType<T extends NextApiHandler> =
  T extends NextApiHandler<infer U> ? U : never;

declare module "swr" {
  export interface SWRHook {

    <Error = any>(
      key: "/api/admin/list",
      fetcher?: Fetcher<
        InferNextApiHandlerResponseType<typeof ___pages_api_admin_list>,
        "/api/admin/list"
      >
    ): SWRResponse<
      InferNextApiHandlerResponseType<typeof ___pages_api_admin_list>,
      Error
    >;

    <Error = any>(
      key: "/api/users",
      fetcher?: Fetcher<
        InferNextApiHandlerResponseType<typeof ___pages_api_users>,
        "/api/users"
      >
    ): SWRResponse<
      InferNextApiHandlerResponseType<typeof ___pages_api_users>,
      Error
    >;
  }
}
