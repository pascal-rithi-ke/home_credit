import * as React from "react";

interface State {
  value: string;
}

class Searchbar extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value }); // get the value from input when it change
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            min={100001}
            value={this.state.value}
            placeholder="Search by id"
            onChange={this.handleChange}
          />
          <a href={`/clients/${this.state.value}`}>🔎</a>
        </form>
      </div>
    );
  }
}

export default Searchbar;
