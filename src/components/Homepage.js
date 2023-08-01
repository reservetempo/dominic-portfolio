import { Link } from "react-router-dom"

const Homepage = () => {
    console.clear()
console.log("home")
    return (
        <div>
            <h1>homepage</h1>
            <Link to={"/about"}>About</Link>
            <Link to={"/works"}>Works</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
        
    )
}

export default Homepage