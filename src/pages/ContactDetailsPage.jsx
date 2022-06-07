import { Component } from "react";
import ContactService from "../services/ContactService.service";

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  };

  componentDidMount() {
    this.loadContact();
  }

  async loadContact() {
    const contact = await ContactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ contact });
  }

  onBack = () => {
    this.props.history.push("/");
    // this.props.history.goBack()
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading...</div>;
    return (
      <section className="contact-details">
        <img
          src={`https://robohash.org/set_set5/${contact._id}.png`}
          alt="contact image"
        />
        <h2>Name: {contact.name}</h2>
        <h4>Email: {contact.email}</h4>
        <h4>Phone: {contact.phone}</h4>
      </section>
    );
  }
}
