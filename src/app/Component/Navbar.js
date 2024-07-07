"use client"



import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    return (
        <div className="sticky top-0">

            <div className="flex justify-end bg-blue-500 " >

<div className="flex justify-start mr-56">


<img src="https://imgs.search.brave.com/3l8T02JrHxrg6iQcBxz2AYJHwYmaE9a2dPzYgncNDhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vMWU4MWRi/NGItNWNjZS00M2Iz/LThjZjUtZGNmNWI0/M2Y3NTg0L2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4MzA3OTQz/NDgxMDMwMDAw" className="w-28 h-20 p-3" />

</div>
                <div className="flex flex-row text-md m-5 mr-52">

                    <div className="dropdown inline-block relative">

                        <button onClick={() => setIsOpen((prev) => !prev)} className=" text-white-500 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">About</span>

                        </button>

                        {isOpen &&
                            <div className=" absolute bg-white rounded-md shadow-md py-1">

                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Team</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Blog</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</a>


                            </div>
                        }
                    </div>


                    <a href="" className="m-2">Services</a>
                    <a href="" className="m-2">Customers</a>
                    <a href="" className="m-2">Pricing</a>
                    <a href="" className="m-2">FAQs</a>
                    <div className="dropdown inline-block relative">

<button onClick={() => setIsOpen1((prev) => !prev)} className=" text-white-500 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span className="mr-1">En</span>

</button>

{isOpen1 &&
    <div className=" absolute bg-white rounded-md shadow-md py-1">

        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Hindi</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">French</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Uk</a>
      


    </div>
}
</div>



                    <div className="flex items-center mx-3">


                        <button className="border-2 border-solid p-5 pt-2 pb-2 rounded-md">Get Started</button>
                    </div>

                </div>
            </div>
        </div>









    );
}

