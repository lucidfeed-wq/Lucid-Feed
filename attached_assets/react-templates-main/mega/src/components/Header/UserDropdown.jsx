import { Link } from "react-router-dom";
import user from "../../assets/images/avatar/image-01.jpg";

const navList = [
  {
    link: "#",
    text: "Account Settings",
  },
  {
    link: "#",
    text: "Dashboard",
  },
  {
    link: "#",
    text: "Sign Out",
  },
];

const UserDropdown = () => {
  return (
    <div className="group relative">
      <Link to="#" className="flex items-center">
        <div className="h-12 w-full max-w-[48px] cursor-pointer rounded-full">
          <img
            src={user}
            alt="avatar"
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>
      </Link>

      <div className="invisible absolute right-0 top-[120%] z-50 mt-3 w-[200px] space-y-2 rounded-sm bg-white p-3 opacity-0 shadow-card-2 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100 dark:bg-dark-2">
        {navList.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="block rounded-sm px-4 py-2 text-sm font-medium text-body-color hover:bg-gray-2 hover:text-primary dark:text-dark-6 dark:hover:bg-dark"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDropdown;
