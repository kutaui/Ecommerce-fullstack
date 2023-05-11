import Cart from "../../public/shopping-cart1.png"
import BsCart from "react-icons/bs"
import Image from "next/image";

const Nav = () => {
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <nav className="flex w-[100%] justify-around h-16 mt-8 items-center">
                <h3 className="text-4xl font-semibold xl:text-3xl mb-2">TheSociety</h3>
                <div className="w-[40%]">
                    <ul className="flex justify-around h-16 items-center font-semibold">
                        <li>About us</li>
                        <li>Our products</li>
                        <li>New items</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="relative">
                    <Image className="absolute ml-4 mt-2.5" src="/search.png" alt="Search Icon" width={18} height={20}/>
                    <input type="text" placeholder="Search ..."
                           className="rounded-full border border-black h-10 pl-12 pb-1 w-72 placeholder:text-black xl:w-56 bg-transparent"/>
                </div>
                <div className="bg-black rounded-3xl w-11 h-11 flex items-center justify-center">
                    <Image src="/shopping-cart1.png" alt="Cart Icon" width={21} height={25} className="-ml-1"/>
                </div>
                <div className="border-black border rounded-3xl w-11 h-11 flex items-center justify-center">
                    <Image src="/user.png" alt="Cart Icon" width={21} height={25}/>
                </div>
            </nav>
            <hr className="border-black"/>

        </>
    )
}

export default Nav