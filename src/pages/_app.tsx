import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>СТС Логісткс Україна</title>
				<meta
					name='description'
					content='Сайт візитівка компанії СТС Логістікс Україна'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/logo.svg'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
