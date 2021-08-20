import {
   ApolloClient,
   ApolloProvider,
   from,
   HttpLink,
   InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Import Local Components
import CharactersPage from "./Components/Pages/CharactersPage";
import EpisodesPage from "./Components/Pages/EpisodesPage";
import Home from "./Components/Pages/Home";
import LocationsPage from "./Components/Pages/LocationsPage";
import SingleEpisode from "./Components/Pages/SinglePages/SingleEpisode";
// import NotFound from "./Components/Pages/404NotFound";

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
      <div className="App">
         <BrowserRouter>
            <Switch>
               <ApolloProvider client={client}>
                  <Route exact path="/" component={Home} />
                  <Route path="/episodes" component={EpisodesPage} />
                  <Route path="/characters" component={CharactersPage} />
                  <Route path="/locations" component={LocationsPage} />
                  <Route path="/singleEpisode/:episodeID">
                     <SingleEpisode></SingleEpisode>
                  </Route>
               </ApolloProvider>
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
