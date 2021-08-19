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
import GetCharacters from "./Components/GetCharacters";
// Local Components
import GetEpisodes from "./Components/GetEpisodes";
import GetLocations from "./Components/GetLocations";
import CharactersPage from "./Components/Pages/CharactersPage";
import EpisodesPage from "./Components/Pages/EpisodesPage";
import Home from "./Components/Pages/Home";
import LocationsPage from "./Components/Pages/LocationsPage";

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
                        <Route
                            exact
                            path="/episodes"
                            component={EpisodesPage}
                        />
                        <Route
                            exact
                            path="/characters"
                            component={CharactersPage}
                        />

                        <Route
                            exact
                            path="/locations"
                            component={LocationsPage}
                        />
                        <GetEpisodes />
                        <GetCharacters />
                        <GetLocations />
                    </ApolloProvider>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
