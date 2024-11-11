import Link from "next/link";
import {auth, signIn, signOut} from "@/auth";

export default async function Header() {
	const session = await auth();

	return (
		<header>
			<div className="container flex items-center justify-between mx-auto my-4">

			<Link href={"/"} className="font-bold text-xl" >VocabCards</Link>
			<nav className="flex gap-2">
			
			{!session && (
				<form action={async () => {
					'use server';
					await signIn('google');
				}}>
				<button type="submit" className= "bg-gray-200 py-2 px-4 rounded-md">Login with Google</button>
				</form>

			)}
			{session && (
				<form action={async () => {
					'use server';
					await signOut();
				}}>
				<button type="submit" className= "bg-gray-200 py-2 px-4 rounded-md">Logout</button>
				</form>

			)}
			<Link className="bg-blue-600 py-2 px-4 rounded-md text-white" href={"/new-deck"}>Create a Deck</Link>
			</nav>
			</div>
		</header>
	)
};