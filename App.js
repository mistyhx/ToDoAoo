import React from "react";
import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import appSyncConfig from "./aws-exports";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import Tabnavigator from "./router/Tabnavigator";

Amplify.configure(appSyncConfig);

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
    apiKey: appSyncConfig.aws_appsync_apiKey
  }
});
class App extends React.Component {
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

export default withAuthenticator(App);
