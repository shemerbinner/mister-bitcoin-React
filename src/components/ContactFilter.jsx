import { Component } from "react";

export class ContactFilter extends Component {
  state = {
    term: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state);
    });
  };

  render() {
    const { name } = this.state;
    return (
      <section className="contact-filter">
        <label htmlFor="term">Search: </label>
        <input
          onChange={this.handleChange}
          type="text"
          name="term"
          id="term"
          value={name}
        />
      </section>
    );
  }
}

export default ContactFilter;
