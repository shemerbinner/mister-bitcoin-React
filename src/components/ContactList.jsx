import { ContactPreview } from "./ContactPreview";
import { Link } from "react-router-dom";

export function ContactList({ contacts, onRemoveContact }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact._id}>
              <ContactPreview
                contact={contact}
                onRemoveContact={onRemoveContact}
              />
              <Link to={`/contacts/edit/${contact._id}`}>Edit contact</Link>
              <button onClick={() => onRemoveContact(contact._id)}>X</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
