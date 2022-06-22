import React from 'react'
import { Link } from 'react-router-dom';
import '../static/style.css';

export default function NavMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home/Ui">Netchill</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home/Ui">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Ui/featured">Featured</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Ui/newrelease">New Releases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Ui/upcoming">Upcoming</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home/Ui/mylist">My List</Link>
                        </li>
                       
                    </ul>

                    <ul className="navbar-nav ml-auto">
                       
                            <a className="nav-link active" aria-current="page" href="/Logout">Logout</a>
                       
                    </ul>


                </div>
            </div>
        </nav>
    )
}
