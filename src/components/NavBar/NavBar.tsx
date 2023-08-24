import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
 const router = useRouter();

 const isLinkActive = (href: string) => {
		return router.pathname === href ? "active" : "";
 };

	return (
		<nav className='bg-yellow flex px-20 py-8 justify-between text-2xl text-main-gray'>
			<Link href='/'>
				<div className={`nav-link ${isLinkActive("/")}`}>
					<span>Головна</span>
				</div>
			</Link>
			<Link href='/about'>
				<div className={`nav-link ${isLinkActive("/about")}`}>
					<span>Про нас</span>
				</div>
			</Link>
			<Link href='/documents'>
				<div className={`nav-link ${isLinkActive("/documents")}`}>
					<span>Документи</span>
				</div>
			</Link>
			<Link href='/gallery'>
				<div className={`nav-link ${isLinkActive("/gallery")}`}>
					<span>Галерея</span>
				</div>
			</Link>
			<Link href='/contacts'>
				<div className={`nav-link ${isLinkActive("/contacts")}`}>
					<span>Контакти</span>
				</div>
			</Link>
		</nav>
	);
};
export default NavBar;
