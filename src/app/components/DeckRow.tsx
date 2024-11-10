import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeckRow() {
	return (
	<>
		<div className="bg-white p-4 rounded-lg shadow-sm relative">
			<div className="absolute top-4 right-4 cursor-pointer">
				<FontAwesomeIcon icon={faHeart} className="size-4 text-gray-300" />
			</div>
			<div className="flex grow gap-4">
				<div className="content-center">
					icon
				</div>
				<div className="grow md:flex">
					<div className="grow">
						
						<div className="text-gray-500 text-sm">Deck Name (learning korean)</div>
						<div className="font-bold text-lg mb-1">Deck type (vocab / grammar / k to en)</div>
						<div className="text-gray-400 text-sm">
							Number of cards &middot; creator
						</div>
					</div>
					<div className="content-end text-gray-500 text-sm">
						rating
					</div>
				</div>
			</div>
		</div>
	</>
	);
}