import { BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
    {
      title: "Home",
      href: "/",
      Icon: BiHomeAlt2,
    },
    {
        title: "Monthly Expense Tracker",
        href: "/expense",
        Icon: PiChatCircleBold
    },
    {
      title: "Budget Planner",
      href: "/budget",
      Icon: IoPricetagsOutline,
    },
  ];