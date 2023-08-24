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
  		<main className="px-16">
  		
        <Hero />
  		</main>
</>
	);
}
