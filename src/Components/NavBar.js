import { Link, useMatch, useResolvedPath } from "react-router-dom";
 

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Paul Cantave</Link>
            <ul>
                <CustomLink to="/Projects">Projects</CustomLink>
                <CustomLink to="/About">About Me</CustomLink>
                <CustomLink to="/Contact">Contact Me</CustomLink>
                <li>
                <a href="https://drive.google.com/file/d/1RZkdGN5nwnFrmFRc3pIbRGi6OSeRhPKu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
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
