import * as React from "react";

interface AppState {
  
}

export class App extends React.Component<{}, AppState> {
  private initialState: AppState = {};

  constructor(props: {}) {
    super(props);
    this.state = this.initialState;
  }

  render(): JSX.Element {
    return (
      <h1>Hello</h1>
    );
  }
}
