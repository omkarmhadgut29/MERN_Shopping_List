import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarText,
} from "reactstrap";

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar color="dark" dark expand="md" className="mb-5">
                <NavbarBrand href="/" className="me-auto">
                    Shopping List
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="https://github.com/omkarmhadgut29">
                                Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
