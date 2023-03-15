import * as React from "react";

interface State {
    value: any;
}

class Searchbar extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any) {
      this.setState({value: event.target.value}); // get the value from input when it change
    };
    handleSubmit(event: any) {
        event.preventDefault(event);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" min={0} value={this.state.value} placeholder="Search by id" onChange={this.handleChange}/>
                    <a href={`/clients/${this.state.value}`}>🔎</a>
                </form>
            </div>
        );
    }
}

export default Searchbar;