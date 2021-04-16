import React from 'react';
import { Link } from 'react-router-dom'
import LiveTvIcon from '@material-ui/icons/LiveTvOutlined';
import Button from '@material-ui/core/Button'
import EyeIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import AddIcon from '@material-ui/icons/AddBox'
const Navbar = () => {
    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h2 style={{ display: 'flex', flexContainer: 'row', alignItems: 'center' }}>
                            <span><LiveTvIcon /></span>
                        IdiotBox</h2>
                    </Link>
                    <ul className="nav-links">
                        <li className="nav-link">
                            <Link to="watched" style={{ textDecoration: 'none' }}>
                                <Button color="primary"
                                    variant="contained"
                                    startIcon={<EyeIcon />}
                                >Watched</Button>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/add" style={{ textDecoration: 'none' }}>
                                <Button color="secondary"
                                    variant="contained"
                                    startIcon={< AddIcon />}
                                >Add</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;