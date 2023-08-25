import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import TopBar from "@/components/TopBar/TopBar";
import Wave from "@/components/UI/Wave/Wave";


export default function Home() {
	return (
		<>
			<header>
				<TopBar />
				<Wave />
				<NavBar />
			</header>
			<main className='px-16 pb-4'>
				<Hero />
				<div className='flex justify-center'>
					<button
						className='bg-transparent py-2 px-4 rounded-xl text-main-gray border-2 border-solid border-accent-color2 text-2xl hover:bg-accent-color2 hover:text-white-main transition-all'
						type='button'>
						Показати усі
					</button>
				</div>
			</main>
		</>
	);
}
