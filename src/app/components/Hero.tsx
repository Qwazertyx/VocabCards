export default function Hero() {
	return (
		<section className="container my-16">
		<h1 className="text-4xl font-bold text-center">
		Discover how to learn with interactive flashcards!
		</h1>
		{/* <p className="text-center text-gray-600 mt-2">
		Vocabcards is a powerful flashcard app designed to make learning easy. Create your own cards with questions on one side and answers on the other. Perfect for vocabulary, coursework, and any subject you want to master!
		</p> */}
		<form className="flex gap-2 mt-4 max-w-md mx-auto">
		<input type="search" placeholder="Search for a deck" className="border border-gray-400 w-full px-2 py-3 rounded-md" />
		<button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
		</form>
		</section>
	)
};