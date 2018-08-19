import React from "react";
import { createStackNavigator } from "react-navigation";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import navigatorConfig from "./router/index";

const Navigator = createStackNavigator(navigatorConfig);

const GRAPHCMS_API =
  "https://api-useast.graphcms.com/v1/cjkzo3d6u012001ah5x3rknhl/master";

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
