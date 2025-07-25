import { Link, useMatch, useResolvedPath } from "react-router-dom";
 

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Paul Cantave</Link>
            <ul>
                <CustomLink to="/Projects">Projects</CustomLink>
                <CustomLink to="/About">About Me</CustomLink>
                <CustomLink to="/Contact">Contact Me</CustomLink>
                <CustomLink to="/Resume">Resume</CustomLink>
            </ul>
        </nav>

    );
}

function CustomLink({to, children ,...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true})
    return(
        <li className= {isActive ? "active" : ""}>
            <Link to= {to} {...props}>{children}</Link>
        </li>
    )
}
