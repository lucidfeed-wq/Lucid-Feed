import React from "react";
import NavRight from "../HorizontalMenu2/NavRight";
import SubmenuItem from "../HorizontalMenu2/SubmenuItem";
import HorizontalMenu from "../HorizontalMenu2/index";
import SettingsPage from "../SettingsPage2";
import InputGroup from "../SettingsPage2/InputGroup";
import LeftColumn from "../SettingsPage2/LeftColumn";
import MenuButton from "../SettingsPage2/MenuButton";
import RightColumn from "../SettingsPage2/RightColumn";
import SettingTop from "../SettingsPage2/SettingTop";
import SidebarWrapper from "../SettingsPage2/SidebarWrapper";
import SubmitButton from "../SettingsPage2/SubmitButton";
import VerticalNavbar from "../VerticalNavbar2";
import Divider from "../VerticalNavbar2/Divider";
import DropdownItem from "../VerticalNavbar2/DropdownItem";
import Icon1 from "../VerticalNavbar2/Icon1";
import Icon10 from "../VerticalNavbar2/Icon10";
import Icon11 from "../VerticalNavbar2/Icon11";
import Icon2 from "../VerticalNavbar2/Icon2";
import Icon3 from "../VerticalNavbar2/Icon3";
import Icon4 from "../VerticalNavbar2/Icon4";
import Icon5 from "../VerticalNavbar2/Icon5";
import Icon6 from "../VerticalNavbar2/Icon6";
import Icon7 from "../VerticalNavbar2/Icon7";
import Icon8 from "../VerticalNavbar2/Icon8";
import Icon9 from "../VerticalNavbar2/Icon9";
import NavItem from "../VerticalNavbar2/NavItem";

const Preview = () => {
  return (
    <SettingsPage>
      <section className="relative flex min-h-screen w-full items-start bg-gray">
        <SidebarWrapper>
          <VerticalNavbar
            link="/#"
            logo="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
            userImg="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg"
            userName="Musharof"
            userEmail="hello@tailgrids.com"
          >
            <NavItem link="/#" icon={<Icon1 />} menu="Home" />
            <NavItem link="/#" icon={<Icon2 />} menu="Dashboard" />
            <NavItem link="/#" icon={<Icon3 />} menu="Products" submenu>
              <DropdownItem link="/#" menu="Dropdown One" />
              <DropdownItem link="/#" menu="Dropdown Two" />
              <DropdownItem link="/#" menu="Dropdown Three" />
            </NavItem>
            <NavItem link="/#" icon={<Icon4 />} menu="Messages" />
            <NavItem link="/#" icon={<Icon5 />} menu="Order" />
            <NavItem link="/#" icon={<Icon6 />} menu="Calendar " />
            <NavItem link="/#" icon={<Icon7 />} menu="Static  " />
            <NavItem link="/#" icon={<Icon8 />} menu="Documents  " />
            <Divider />
            <NavItem link="/#" icon={<Icon9 />} menu="Chat " />
            <NavItem link="/#" icon={<Icon10 />} menu="Settings   " />
            <NavItem link="/#" icon={<Icon11 />} menu="Log out  " />
          </VerticalNavbar>
        </SidebarWrapper>

        <div className="relative z-50 ml-0 w-full xl:ml-[300px]">
          <MenuButton />
          <header className="w-full bg-white">
            <HorizontalMenu
              title="Hello user!"
              subtitle="Welcome back to dashboard."
            >
              <NavRight
                countryImg="https://cdn.tailgrids.com/2.0/image/assets/images/countries/usa.svg"
                userImg="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-01.jpg"
              >
                <SubmenuItem link="/#" name="Account Settings" />
                <SubmenuItem link="/#" name="Dashboard" />
                <SubmenuItem link="/#" name="Sign Out" />
              </NavRight>
            </HorizontalMenu>
          </header>

          <div className="p-[30px]">
            <SettingTop
              title="Settings Page"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem."
            />
            <div className="-mx-5 flex flex-wrap">
              <LeftColumn
                title="Account Information"
                subtitle="Edit your profile quickly"
                img="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-02.jpg"
              >
                <InputGroup
                  labelTitle="First Name"
                  type="text"
                  value="Musharof"
                  placeholder="Musharof"
                />
                <InputGroup
                  labelTitle="Last Name"
                  type="text"
                  value="Chy"
                  placeholder="Chy"
                />
                <InputGroup
                  labelTitle="Email Address"
                  type="email"
                  value="existingemail@gmail.com"
                  placeholder="existingemail@gmail.com"
                />
                <InputGroup
                  labelTitle="Website"
                  type="text"
                  value="exampla@domain.com"
                  placeholder="exampla@domain.com"
                />
                <SubmitButton>Update Now</SubmitButton>
              </LeftColumn>
              <RightColumn title="Password">
                <InputGroup
                  labelTitle="Current Password"
                  type="password"
                  value=""
                  placeholder="***********"
                />
                <InputGroup
                  labelTitle="New Password"
                  type="password"
                  value=""
                  placeholder="Enter your new password"
                />
                <InputGroup
                  labelTitle="Re-type New Password"
                  type="password"
                  value=""
                  placeholder="Re-type your new password"
                />
                <SubmitButton>Save</SubmitButton>
              </RightColumn>
            </div>
          </div>
        </div>
      </section>
    </SettingsPage>
  );
};

export default Preview;
