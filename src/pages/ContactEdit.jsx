import { Component } from "react";
import ContactService from "../services/ContactService.service";

export class ContactEdit extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    console.log("this.props:", this.props);
    const id = this.props.match.params.id;
    const contact = id
      ? await ContactService.getContactById(id)
      : ContactService.getEmptyContact();
    this.setState({ contact }, () => {
      // this.inputRef.current.focus()
    });
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState({
      contact: { ...this.state.contact, [field]: value },
    });
  };

  onSaveContact = async (ev) => {
    ev.preventDefault();
    await ContactService.saveContact({ ...this.state.contact });
    this.props.history.push("/");
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading...</div>;
    return (
      <section className="contact-edit">
        <h2>{contact._id ? "Edit" : "Add"} Contact</h2>
        <form onSubmit={this.onSaveContact}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={contact.name}
            placeholder="Name"
          />
          <label htmlFor="email">Email: </label>
          <input
            onChange={this.handleChange}
            type="mail"
            name="email"
            id="email"
            value={contact.email}
            placeholder="Email"
          />
          <label htmlFor="phone">Phone: </label>
          <input
            onChange={this.handleChange}
            type="tel"
            name="phone"
            id="phone"
            value={contact.phone}
            placeholder="Phone number"
          />
          <button type="submit">Save</button>
        </form>
      </section>
    );
  }
}
