import React from 'react';
import stl from './Header.module.scss';
import logo from "../../assets/img/logo/small-logo-img.svg";
import HeaderMenu from './HeaderMenu/HeaderMenu';


function Header() {
    const [open, setOpen] = React.useState(false);


    return (
        <header className={`${stl.root} __container`}>
            <nav className={stl.navbar}>
                <a href='/' className={stl.logo}>
                    <img src={logo} alt="logo" />
                    <div className={stl.logo__title}>
                        <div>
                            ITOP1000
                        </div>
                        <div className={stl.logo__text}>
                            Test Task
                        </div>
                    </div>
                </a>
                <div className={!open ? stl.menuBody : stl.menuBodyOpen }>
                    <HeaderMenu />
                </div>
                <button
                        className={stl.iconMenu}
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                    </button>
            </nav>
        </header>
    )
}

export default Header