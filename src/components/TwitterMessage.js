import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputLength: 0,
      twitterMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      inputLength: event.target.value.length,
      twitterMessage: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.twitterMessage}
          onChange={this.handleChange}
        />
        <div>
          Characters remaining: {this.props.maxChars - this.state.inputLength}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
