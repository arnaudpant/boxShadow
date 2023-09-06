import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className=" relative p-4 border-b-2 border-gray-200">
            <div className="absolute ">
                <Link to="https://kallavero.fr">
                    <AiFillHome className="text-[#F6F6F6] text-3xl cursor-pointer" />
                </Link>
            </div>

            <h1 className="text-xl text-center uppercase font-semibold">
                BoxShadow Generator
            </h1>
        </header>
    );
};

export default Header;
