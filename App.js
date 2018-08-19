import React from "react";
import { createStackNavigator } from "react-navigation";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { ApolloProvider } from "react-apollo";
import navigatorConfig from "./router/index";
import appSyncConfig from "./AppSync";

const Navigator = createStackNavigator(navigatorConfig);

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authenticationType,
    apiKey: appSyncConfig.apiKey
  }
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <Navigator />
        </Rehydrated>
      </ApolloProvider>
    );
  }
}
