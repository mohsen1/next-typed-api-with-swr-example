import { NextApiHandler } from "next";
import { Fetcher, SWRConfiguration, SWRResponse } from "swr";
import pages_api_users from "./pages/api/users";

type InferNextApiHandlerResponseType<T extends NextApiHandler> =
  T extends NextApiHandler<infer U> ? U : never;

declare module "swr" {
  export interface SWRHook {
    // imagine we are going to generate a few overloads per API endpoint
    // This is the bare minimum to show how this can work.
    // SWRHook has many overloads. All of which can be specified for API route
    <Error = any>(
      key: "/api/users",
      fetcher?: Fetcher<
        InferNextApiHandlerResponseType<typeof pages_api_users>,
        "/api/users"
      >
    ): SWRResponse<
      InferNextApiHandlerResponseType<typeof pages_api_users>,
      Error
    >;
  }
}
