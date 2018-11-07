import * as React from "react";

export interface MyClassProps {
  name?: string;
  isMarried: boolean;
}

class MyClass extends React.Component<MyClassProps> {
  public static defaultProps: Partial<MyClassProps> = {
    name: "techsith"
  };
  public render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default MyClass;
