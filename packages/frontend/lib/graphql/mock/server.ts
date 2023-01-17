import { setupServer, SetupServerApi } from "msw/node";
import { graphql } from "msw";
import { GlobalQuery } from "../generated";
import { defaultGraph } from "./graph";

function setupGraphQLServer(): SetupServerApi {
  return setupServer(
    graphql.query("Global", (req, res, ctx) => {
      const graph: GlobalQuery = defaultGraph;
      return res(ctx.data(graph));
    })
  );
}

const server: SetupServerApi = setupGraphQLServer();

export default server;
