import { RouterProvider} from "react-router-dom";
import "../src/app.scss";
import { router } from "./router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/graphqlConfig";





function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;

