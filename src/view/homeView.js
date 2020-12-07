import React from "react";
import {Link} from "react-router-dom";

const HomeView = () => (
    <div>
        <Link to="/login">Sign in</Link>
        <Link to="/create">Create player</Link>
    </div>
);

export default HomeView;
