import React from "react";

import { Link } from "react-router-dom";

export default ({ title, url }) => {
    return  <div className="nav-item"><Link to = {url} className="nav-link"> {title}</Link></div>
    

}