import React from "react";
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import appSyncConfig from "./AppSync";
import Test from "./components/Test";

import Tabnavigator from "./router/Tabnavigator";

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
          <Tabnavigator />
        </Rehydrated>
      </ApolloProvider>
    );
  }
}
