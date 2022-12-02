import React from "react";

export default function ListContacts(props) {
  console.log(props);
  return (
    <div>
      <ol>
        {props.contacts.map((contact, i) => {
          return <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`,
            }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button
              onClick={() => onDeleteContact(contact)}
              className="contact-remove"
            >
              Remove
            </button>
          </li>

        })}
      </ol>
    </div>
  );
}
