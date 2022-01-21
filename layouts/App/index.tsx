import loadable from "@loadable/component";
import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//페이지 전환 애니메이션

import { css, jsx } from "@emotion/react";
const TransitionGroupStyle = css``;

const Workspace = loadable(() => import("@layouts/Workspace"));
const App = () => (
  <BrowserRouter>
    <Route
      render={({ location }) => {
        return (
          // <TransitionGroup
          //   className="transition-group"
          //   css={TransitionGroupStyle}
          // >
          //   <CSSTransition
          //     key={location.pathname}
          //     timeout={300}
          //     className="transition"
          //   >
          <Switch>
            <Route exact path="/">
              <Redirect to="/list" />
            </Route>
            <Route
              path="/room:room_id"
              render={() => <Workspace page={"room"} />}
            />
            <Route path="/list" render={() => <Workspace page={"list"} />} />
          </Switch>
          //   </CSSTransition>
          // </TransitionGroup>
        );
      }}
    />
  </BrowserRouter>
);

export default App;
