import { CarServiceNew } from "../../service/beckCommunication";

function DeleteCar({ deleteCarSubmit }) {
	return (
		<>
			<button
				type="button"
				className=" rounded-lg text-gray-600"
				title="Obrisi ogras"
				onClick={() => {
					deleteCarSubmit();
				}}
			>
				<span className="icon lightStar">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0  32 32"
						className="text-red-300	 hover:text-red-600 hover:fill-current"
						width="50px"
						height="50px"
					>
						<g>
							<g fill="#fff" fillRule="evenodd" stroke="none" strokeWidth="1">
								<g className="fill-current" transform="translate(-518 -1146)">
									<path d="M540.647 1159.24a1.002 1.002 0 11-1.415 1.42l-2.239-2.24-2.268 2.27c-.394.39-1.033.39-1.427 0a1.013 1.013 0 010-1.43l2.268-2.27-2.239-2.23a1.002 1.002 0 111.415-1.42l2.239 2.24 2.3-2.3a1.016 1.016 0 011.427 0c.395.4.395 1.03 0 1.43l-2.3 2.3 2.239 2.23zm5.349-13.24h-17.945c-.28-.02-.566.07-.78.28l-8.986 9.94a.989.989 0 00-.287.76c-.015.28.076.56.287.77l8.986 9.94c.196.19.452.29.708.29v.02h18.017a4.002 4.002 0 004.004-4v-14c0-2.21-1.793-4-4.004-4z"></path>
								</g>
							</g>
						</g>
					</svg>
				</span>
			</button>
		</>
	);
}

export default DeleteCar;
