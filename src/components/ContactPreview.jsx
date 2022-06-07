import { Link } from "react-router-dom";

export function ContactPreview({ contact }) {
  return (
    <section className="contact-preview">
      <Link to={`/contacts/${contact._id}`}>
        <img
          src={`https://robohash.org/set_set5/${contact._id}.png`}
          alt="contact image"
        />
        <h2>{contact.name}</h2>
      </Link>
    </section>
  );
}
