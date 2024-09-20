
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
export const NavBar = () => {
    return (
        <Navbar fluid rounded className="bg-black">
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Test Beans</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-neutral-300"><Link to="/">< BiHomeAlt2 className="inline-block"/> Home</Link></Navbar.Link>
                <Navbar.Link className="text-neutral-300"><Link to="/expense"><PiChatCircleBold className="inline-block"/> Monthly Expense Tracker</Link></Navbar.Link>
                <Navbar.Link className="text-neutral-300"><Link to="/budget"><IoPricetagsOutline className="inline-block"/> Budget Planner</Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}