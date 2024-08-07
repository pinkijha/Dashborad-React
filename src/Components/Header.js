import { LuSearch } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { USER_PROFILE } from "../utils/constant";

const Header = () => {
  return (
    <header className="bg-dark-navy flex p-4 w-full lg:h-20 sm:h-16 xs:h-12 items-center">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center px-3">
          <LuSearch className="text-white text-xl" />
        </div>
        <input
          type="text"
          className="bg-dark-navy w-full sm:w-48 lg:w-1/4 border border-gray-300 rounded py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center ml-auto space-x-4">
        <HeaderBox>
          <CiMail />
        </HeaderBox>
        <HeaderBox>
          <IoSettingsOutline />
        </HeaderBox>
        <HeaderBox>
          <HiOutlineBellAlert />
        </HeaderBox>
        <img
          src={USER_PROFILE}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </header>
  );
};

const HeaderBox = ({ children }) => (
  <div className="text-white text-xl font-bold bg-gray-500 rounded-full p-3">
    {children}
  </div>
);

export default Header;
