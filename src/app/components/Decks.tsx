import DeckRow from "./DeckRow";

export default function Decks() {
	return (
		<div className="bg-slate-200 py-6 rounded-3xl">
			<div className="container">
			<h2 className="font-bold mb-4">Recent Decks</h2>

			<div className="flex flex-col gap-4">
				<DeckRow/>
				<DeckRow/>
				<DeckRow/>
				<DeckRow/>
			</div>

			</div>
		</div>
	);
}