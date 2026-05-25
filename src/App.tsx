import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

Amplify.configure(outputs);

const App = () => (
  <Authenticator>
    {({ signOut, user }) => {
      const username =
        user?.signInDetails?.loginId ?? user?.username ?? "Guest";

      return (
        <main className="auth-app">
          <h1>Welcome, {username}</h1>
          <p>This app is configured with Amplify Gen 2 Auth.</p>
          <button type="button" onClick={signOut}>
            Sign out
          </button>
        </main>
      );
    }}
  </Authenticator>
);

export default App;
