import { useState } from "react"

const Form = ({ onSend }) => {

    //sate for the input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [contact, setContact] = useState([]);

    const handleSubmit = (e) => {
        //prevent page from refreshing
        e.preventDefault();

        //log the input field values
        // console.log("Name:", name);
        // console.log("Email:", email);
        // console.log("Phone:", phone);

        //add new contact to the contact list
        const newContact = {
            name: name,
            email: email,
            phone: phone,
        };

        // setContact([...contact, newContact]);   --> not a safer way

        setContact((prevContacts) => [...prevContacts, newContact]);

        //send data to parent component
        onSend(contact.concat(newContact));

        //clear the input fields
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <div className="w-full px-4 flex justify-center items-center">
            <form
                className="w-full max-w-xs bg-[#B0DB9C] px-4 py-6 rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1
                    className="text-lg text-center text-[#332D56] leading-5 font-[Poppins] font-bold"
                >
                    Add to Contact
                </h1>

                {/* input fields */}
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-[#332D56] rounded-md focus:outline-none focus:ring-2 focus:ring-[#332D56]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-[#332D56] rounded-md focus:outline-none focus:ring-2 focus:ring-[#332D56] mt-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full px-4 py-2 border border-[#332D56] rounded-md focus:outline-none focus:ring-2 focus:ring-[#332D56] mt-4"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button className="w-full bg-[#332D56] text-white py-2 rounded-md mt-4 text-lg font-semibold cursor-pointer hover:bg-[#1A162E] transition-colors">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form