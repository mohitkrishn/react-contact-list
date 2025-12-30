import { useState } from "react";

const Form2 = ({ onSend }) => {

    //single state to manage all input fields
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
    });

    //handler for input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    }

    //handler for form submission
    const handleSubmit = (e) => {
        //prevent page from refreshing
        e.preventDefault();

        // console.log(inputs);

        // set data to the local storage
        localStorage.setItem("contacts", JSON.stringify(inputs));

        //send data to parent component
        onSend(inputs);

        //clear the input fields
        setInputs({
            name: '',
            email: '',
            phone: '',
        });
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
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-[#332D56] rounded-md focus:outline-none focus:ring-2 focus:ring-[#332D56] mt-4"
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full px-4 py-2 border border-[#332D56] rounded-md focus:outline-none focus:ring-2 focus:ring-[#332D56] mt-4"
                        name="phone"
                        value={inputs.phone}
                        onChange={handleChange}
                        autoComplete="off"

                    />
                    <button
                        className="w-full bg-[#332D56] text-white py-2 rounded-md mt-4 text-lg font-semibold cursor-pointer hover:bg-[#1A162E] transition-colors"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form2