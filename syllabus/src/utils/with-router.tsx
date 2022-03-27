import React from "react";

import { useNavigate } from "react-router-dom";

function withRouter(Component) {
  const ComponentWithRouterProp = (props) => {
    const navigate = useNavigate();

    return <Component {...props} router={{ navigate }} />;
  };

  return ComponentWithRouterProp;
}

export default withRouter;

export type WithRouter = {
  router: {
    navigate: (path: string) => void;
  };
};
