import { Link } from "react-router-dom";
function Menu (){
    return(
        <ul>
            <li>
                <Link to="/">HOME Link</Link>
            </li>
            <li>
                <Link to="/javascript">JAVASCRIPT Link</Link>
            </li>
            <li>
                <Link to="/css">CSS Link</Link>
            </li>
            <li>
                <Link to="/react">REACT Link</Link>
            </li>
      </ul>
    );
}

export {Menu}