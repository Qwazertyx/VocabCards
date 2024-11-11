import Link from "next/link";
import {auth, signIn, signOut} from "@/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function NewDeckPage() {

	const session = await auth()
	if (!session) return <div className="container">Not authenticated</div>
	if (!session.user) return <div className="container">Error with user</div>



	return (
		<div className="container">
			<h2 className="text-lg mt-8">Your Decks</h2>
			<p className="text-gray-500 text-sm mb-2">Select a Deck to create your flashcards </p>
			<div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
				No Decks found assigned to this user
			</div>


			<h2 className="text-lg mt-8">Create a New Deck</h2>
			<p className="text-gray-500 text-sm mb-2">Start by creating a deck for any topic you'd like to master!</p>
			<form action="" className="flex gap-2">
				<input type="text" placeholder="Deck Name" className="p-2 rounded-md border border-gray-400" />
				<button className="bg-gray-200 px-4 py-2 rounded-md flex gap-2 items-center">
					Create New Deck
				</button>
			</form>
		</div>
	);
}