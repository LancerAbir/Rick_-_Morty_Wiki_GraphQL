import "./App.css";
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   HttpLink,
   from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Local Components
import GetEpisodes from "./Components/GetEpisodes";

// Check is Error
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
   if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
         alert(`GraphQL Error ${message}`);
      });
   }
});
// API Link
const link = from([
   errorLink,
   new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

// Apollo Client Setup
const client = new ApolloClient({
   cache: new InMemoryCache(),
   link,
});

function App() {
   return (
      <ApolloProvider client={client}>
         <GetEpisodes />
      </ApolloProvider>
   );
}

export default App;
