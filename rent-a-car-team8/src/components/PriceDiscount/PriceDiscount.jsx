import React from "react";
import { NavLink } from "react-router-dom";

import "./PriceDiscount.css";

function PriceDiscount() {
	return (
		<div className="p-6 bg-amber-400 text-gray-900 margin-up border-white border-y-1">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<h2 className="text-center text-5xl tracki font-bold">
						Popust do
						<br className="sm:hidden"></br> 20%
					</h2>
					<div className="space-x-2 text-center text-4xl py-2 lg:py-0">
						<span>
							Za <span className="font-bold text-5xl">KEŠ</span> kupovinu
						</span>
					</div>
					<NavLink to="/cars">
						<a
							rel="noopener noreferrer"
							href="#"
							className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 text-white"
						>
							Naša ponuda
						</a>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default PriceDiscount;
