import React, { Suspense, lazy } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

const Home = lazy(() => import("./Home/Home"));
const Items = lazy(() => import("./Items/Items"));
const Overview = lazy(() => import("./Overview/Overview"));
const Example = lazy(() => import("./Example/Example"));

export interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = () => {
  const location = useLocation();

  // Overwrite the document.title
  if (location.pathname === "/") {
    window.document.title = "Shopsy";
  }

  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/items" component={Items} />
          <Route path="/item/:id" component={Overview} />

          <Route path="/example" component={Example} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Layout;
