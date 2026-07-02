"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavItem from "@/components/navitem"
import {
    House,
    User,
    Settings,
    Users
} from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden text-black dark:text-white flex items-center justify-between p-4 bg-white dark:bg-neutral-900 rounded-xl theme-transition">
                <h1 className="font-bold text-xl">
                    Spotify Analytics
                </h1>

                <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="p-4 lg:hidden text-black dark:text-white bg-white dark:bg-neutral-900 rounded-xl theme-transition">
                    <nav className="flex flex-col gap-3">
                        <NavItem icon={<House />} href="/dashboard" label="Dashboard (WIP)" />
                        <NavItem icon={<User />} href="/profile" label="Profile" />
                        <NavItem icon={<Users />} href="/teams" label="Team (WIP)" />
                        <NavItem icon={<Settings />} href="/settings" label="Settings" />
                        <div className="flex justify-center"><ThemeToggle /></div>
                        
                    </nav>
                </div>
            )}
        </>
    );
}