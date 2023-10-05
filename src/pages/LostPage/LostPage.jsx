function LostPage() {
	return (
		<div className="log-in-form-container bg-cool-blue">
			<div className="log-in-form-inner-container mx-4">
				<section className="flex items-center h-full p-16 bg-gray-900 text-gray-100 bg-opacity-0">
					<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
						<div className="max-w-md text-center">
							<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
								<span className="sr-only">Error</span>404
							</h2>
							<p className="text-2xl font-semibold md:text-3xl">
								Sorry, we could not find this page.
							</p>
							<p className="mt-4 mb-8 text-gray-400">
								But dont worry, you can find plenty of other things on our
								homepage.
							</p>
							<a
								rel="noopener noreferrer"
								href="/"
								className="px-8 py-3 font-semibold rounded bg-amber-400 text-gray-900"
							>
								Back to homepage
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default LostPage;