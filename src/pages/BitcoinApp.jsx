import { Component } from "react";
import { ContactPage } from "./ContactPage";

export class BitcoinApp extends Component {
  state = {
    selectedContactId: null,
  };

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId });
  };

  render() {
    return (
      <section className="bitcoin-app">
        <ContactPage onSelectContact={this.onSelectContact} />
      </section>
    );
  }
}
