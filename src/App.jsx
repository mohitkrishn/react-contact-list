import { useState } from "react";
import Form2 from "./component/Form2";
// import Form from "./component/Form"

const App = () => {

  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  const [contactList, setContactList] = useState(contacts);

  function getContacts(formData) {

    const newContact = [...contactList];

    newContact.push(formData);

    //setting data to updater function
    setContactList(newContact);

    localStorage.setItem("contacts", JSON.stringify(newContact));
  }

  function handleDelete(index) {
    const updatedContacts = [...contactList];

    const cnf = window.confirm("Are you sure you want to delete this contact?");

    if (!cnf) return;
    else updatedContacts.splice(index, 1);

    setContactList(updatedContacts);

    // Update the local storage for the deleted contact
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  }

  return (
    <div className="w-full min-h-screen  bg-[#DDF6D2] flex flex-col md:flex-row justify-center items-center gap-10 overflow-y-scroll">
      {/* <Form
        onSend={setContactList}
      /> */}

      <Form2
        onSend={getContacts}
      />

      {/* Display contact list */}
      <div className="w-full max-w-sm p-6 rounded-lg overflow-y-scroll">
        <h2 className="text-xl text-center text-[#332D56] leading-5 font-[Poppins] font-bold mb-4">
          Contact List
        </h2>
        {contactList.length === 0 ? (
          <p className="text-center text-[#332D56]">No contacts added yet.</p>
        ) : (
          <ul className="space-y-4">
            {contactList.map((contact, index) => (
              <li
                key={index}
                className="border border-[#332D56] rounded-md p-4 bg-white"
              >
                <p className="font-bold text-[#332D56]">Name: {contact.name}</p>
                <p className="text-[#332D56]">Email: {contact.email}</p>
                <p className="text-[#332D56]">Phone: {contact.phone}</p>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default App