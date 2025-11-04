import React from 'react'
import VerticalNavbar from '../VerticalNavbar2'
import NavItem from '../VerticalNavbar2/NavItem'
import DropdownItem from '../VerticalNavbar2/DropdownItem'
import Divider from '../VerticalNavbar2/Divider'
import Icon1 from '../VerticalNavbar2/Icon1'
import Icon2 from '../VerticalNavbar2/Icon2'
import Icon3 from '../VerticalNavbar2/Icon3'
import Icon4 from '../VerticalNavbar2/Icon4'
import Icon5 from '../VerticalNavbar2/Icon5'
import Icon6 from '../VerticalNavbar2/Icon6'
import Icon7 from '../VerticalNavbar2/Icon7'
import Icon8 from '../VerticalNavbar2/Icon8'
import Icon9 from '../VerticalNavbar2/Icon9'
import Icon10 from '../VerticalNavbar2/Icon10'
import Icon11 from '../VerticalNavbar2/Icon11'
import SettingsPage from '../SettingsPage';
import SidebarWrapper from '../SettingsPage/SidebarWrapper'
import HorizontalMenu from '../HorizontalMenu3/index'
import NavRight from '../HorizontalMenu3/NavRight'
import SubmenuItem from '../HorizontalMenu3/SubmenuItem'
import MenuButton from '../SettingsPage/MenuButton';
import SettingTop from '../SettingsPage/SettingTop'
import LeftColumn from '../SettingsPage/LeftColumn'
import RightColumn from '../SettingsPage/RightColumn'
import InputGroup from '../SettingsPage/InputGroup'
import TextareaGroup from '../SettingsPage/TextareaGroup'

const Preview = () => {
  
  return (
    <SettingsPage>
      <section className='relative flex min-h-screen w-full items-start bg-gray-2'>
        <SidebarWrapper>
          <VerticalNavbar
            link='/#'
            logo='https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg'
            userImg='https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg'
            userName='Musharof'
            userEmail='hello@tailgrids.com'
          >
            <NavItem link='/#' icon={<Icon1 />} menu='Home' />
            <NavItem link='/#' icon={<Icon2 />} menu='Dashboard' />
            <NavItem link='/#' icon={<Icon3 />} menu='Products' submenu>
              <DropdownItem link='/#' menu='Dropdown One' />
              <DropdownItem link='/#' menu='Dropdown Two' />
              <DropdownItem link='/#' menu='Dropdown Three' />
            </NavItem>
            <NavItem link='/#' icon={<Icon4 />} menu='Messages' />
            <NavItem link='/#' icon={<Icon5 />} menu='Order' />
            <NavItem link='/#' icon={<Icon6 />} menu='Calendar ' />
            <NavItem link='/#' icon={<Icon7 />} menu='Static  ' />
            <NavItem link='/#' icon={<Icon8 />} menu='Documents  ' />
            <Divider />
            <NavItem link='/#' icon={<Icon9 />} menu='Chat ' />
            <NavItem link='/#' icon={<Icon10 />} menu='Settings   ' />
            <NavItem link='/#' icon={<Icon11 />} menu='Log out  ' />
          </VerticalNavbar>
        </SidebarWrapper>

        <div className='relative z-50 ml-0 w-full xl:ml-[300px]'>
          <MenuButton />
          <header className='w-full bg-white'>
            <HorizontalMenu placeholder='Type to search...'>
              <NavRight
                userName='Thomas Anree'
                userPosition='Ux Designer'
                userImg='https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-02.jpg'
              >
                <SubmenuItem link='/#' name='Account Settings' />
                <SubmenuItem link='/#' name='Dashboard' />
                <SubmenuItem link='/#' name='Sign Out' />
              </NavRight>
            </HorizontalMenu>
          </header>

          <div className='p-[30px]'>
            <SettingTop
              title='Settings Page'
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.'
              button1='Cancel'
              button2='Save'
            />
            <div className='-mx-4 flex flex-wrap'>
              <LeftColumn title='Personal Information'>
                <div className='w-full px-3 md:w-1/2'>
                  <InputGroup
                    labelTitle='Full Name'
                    type='text'
                    value='Devid Jhon'
                    placeholder='Devid Jhon'
                    name
                  />
                </div>
                <div className='w-full px-3 md:w-1/2'>
                  <InputGroup
                    labelTitle='Phone Number'
                    type='text'
                    value='+990 3343 7865'
                    placeholder='+990 3343 7865'
                  />
                </div>
                <div className='w-full px-3'>
                  <InputGroup
                    labelTitle='Email Address'
                    type='text'
                    value='devidjhon24'
                    placeholder='devidjhon24'
                    email
                  />
                </div>
                <div className='w-full px-3'>
                  <InputGroup
                    labelTitle='Username'
                    type='text'
                    value='devidjond45@gmail.com'
                    placeholder='devidjond45@gmail.com'
                    email
                  />
                </div>
                <div className='w-full px-3'>
                  <TextareaGroup
                    labelTitle='BIO'
                    placeholder='Write your BIO'
                    value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam lacinia turpis tortor, consequat efficitur mi
                      congue a. Curabitur cursus, ipsum ut lobortis sodales,
                      enim arcu pellentesque lectus ac suscipit diam sem a
                      felis.'
                  />
                </div>
              </LeftColumn>
              <RightColumn
                title='Your Photo'
                subtitle='Edit your photo'
                img='https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg'
              ></RightColumn>
            </div>
          </div>
        </div>
      </section>
    </SettingsPage>
  )
}

export default Preview;
