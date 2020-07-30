import React from "react";

class SearchBar extends React.Component {
  state = { userinput: "" };

  onInputChange = (event) => {
    event.preventDefault();
    this.props.ifSubmit(this.state.userinput);
  };
  render() {
    return (
      <div className='ui-segment'>
        <form onSubmit={this.onInputChange} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.userinput}
              onChange={(e) => this.setState({ userinput: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
