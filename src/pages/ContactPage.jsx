import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadContacts,
  removeContact,
  setFilterBy,
} from "../store/actions/contactActions";

import { ContactList } from "../components/ContactList";
import { ContactFilter } from "../components/ContactFilter";

class _ContactPage extends Component {
  async componentDidMount() {
    this.props.loadContacts();
  }

  onRemoveContact = async (contactId) => {
    this.props.removeContact(contactId);
  };

  onChangeFilter = async (filterBy) => {
    await this.props.setFilterBy(filterBy);
    this.props.loadContacts();
  };

  render() {
    const { contacts } = this.props;
    if (!contacts) return <div>Loading...</div>;

    return (
      <section className="contact-page">
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link to="/contacts/edit">Add contact</Link>
        <ContactList
          contacts={contacts}
          onRemoveContact={this.onRemoveContact}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  };
};

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
};

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage);
