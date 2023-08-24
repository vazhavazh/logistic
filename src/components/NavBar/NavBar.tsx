import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FcAbout, FcDocument, FcGallery, FcContacts } from "react-icons/fc";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
	const router = useRouter();

	const isLinkActive = (href: string) => {
		return router.pathname === href ? "active" : "";
	};

	return (
		<nav className='bg-yellow flex px-20 py-4 justify-between text-2xl text-main-gray'>
			<Link href='/'>
				<div className={`nav-link ${isLinkActive("/")}`}>
					<span>Головна</span>
				</div>
			</Link>
			<Link
				href='/about'
				className='flex gap-1 items-center'>
				<FcAbout
					width={20}
					height={20}
				/>
				<div className={`nav-link ${isLinkActive("/about")}`}>
					<span>Про нас</span>
				</div>
			</Link>
			<Link
				href='/documents'
				className='flex gap-1 items-center'>
				<FcDocument />
				<div className={`nav-link ${isLinkActive("/documents")}`}>
					<span>Документи</span>
				</div>
			</Link>
			<Link
				href='/gallery'
				className='flex gap-1 items-center'>
				<FcGallery />
				<div className={`nav-link ${isLinkActive("/gallery")}`}>
					<span>Галерея</span>
				</div>
			</Link>
			<Link
				href='/contacts'
				className='flex gap-1 items-center'>
				<FcContacts />
				<div className={`nav-link ${isLinkActive("/contacts")}`}>
					<span>Контакти</span>
				</div>
			</Link>
		</nav>
	);
};
export default NavBar;
