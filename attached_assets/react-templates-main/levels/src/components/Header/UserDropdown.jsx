import { Link } from "react-router-dom";
import user from "../../assets/images/avatar/image-04.jpg";

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
      <Link to="#" className="flex cursor-pointer items-center">
        <img
          src={user}
          alt="avatar"
          className="h-8 w-8 rounded-full border-2 border-white border-opacity-20 object-cover object-center"
        />
        <span className="pl-2 pr-[5px] text-sm font-medium text-white">
          Patrick
        </span>
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.08754 4.83687C3.31535 4.60906 3.68469 4.60906 3.9125 4.83687L7.00002 7.92439L10.0875 4.83687C10.3154 4.60906 10.6847 4.60906 10.9125 4.83687C11.1403 5.06468 11.1403 5.43402 10.9125 5.66183L7.4125 9.16183C7.1847 9.38963 6.81535 9.38963 6.58754 9.16183L3.08754 5.66183C2.85974 5.43402 2.85974 5.06468 3.08754 4.83687Z"
              fill="white"
            />
          </svg>
        </span>
      </Link>

      <div className="invisible absolute right-0 top-[120%] mt-3 w-[200px] space-y-2 rounded-sm bg-white p-3 opacity-0 shadow-card-2 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100 dark:bg-dark-2">
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
