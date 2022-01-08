import "./App.css";
import { Dashboard } from "./component/Dashboard";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { TopBar } from "./component/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Capsules from "./component/Capsules";
import Capsule from "./component/Capsule";


function App() {
  return (
    <ApolloProvider client={client}>
      {/* <TopBar /> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/capsule/:capsuleId" element={<Capsule />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
export default App;
