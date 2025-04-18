"use client";
import React, { useState, useCallback } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsivNav = () => {
    const [showNav, setShowNav] = useState(false);

    const openNav = useCallback(() => setShowNav(true), []);
    const closeNav = useCallback(() => setShowNav(false), []);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <Nav openNav={openNav} />
            {showNav && <MobileNav showNav={showNav} closeNav={closeNav} />}
        </header>
    );
};

export default ResponsivNav;
