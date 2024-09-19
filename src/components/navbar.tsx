import { routes } from "../routesArr";
import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
            {routes.map((route) => {
                const { Icon, href, title } = route;
                return (
                    <li
                    key={title}>
                        <Link className="flex items-center gap-1 hover:text-neutral-400 transition-all" to={href}><Icon />{title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}