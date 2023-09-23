import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import SectionHeading from "../SectionHeading/SectionHeading";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	scales: {
		x: {
			ticks: {
				color: "#f5f5f5", // Change this to your desired color
				font: {
					size: 16, // Set the font size to 16 pixels (adjust as needed)
				},
			},
			title: {
				display: true,
				color: "#f5f5f5", // Change this to your desired color
			},
			grid: {
				color: "rgba(255, 255, 255, 0.1)",
				borderWidth: 0.5, // Change this to your desired color
			},
		},
		y: {
			ticks: {
				color: "#f5f5f5", // Y-axis label color
				font: {
					size: 16, // Set the font size to 16 pixels (adjust as needed)
				},
			},
			grid: {
				color: "rgba(255, 255, 255, 0.1)",
				borderWidth: 0.5, // Change this to your desired color
			},
		},

		// Other scale configurations (y-axis, etc.)
	},

	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Broj oglašavanih automobila tokom vremena",
			color: "#f5f5f5",
			font: {
				size: 21, // Set the font size to 16 pixels (adjust as needed)
			},
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.datatype.number({ min: 10, max: 70 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export default function NumberOfCarsChart() {
	return (
		<div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-gray-900">
			<SectionHeading
				heading={"Broj automobila tokom vremena"}
				colorWhite={true}
			></SectionHeading>
			<div className="p-20 py-5  border border-dotted mt-4">
				<Line options={options} data={data} />
			</div>
		</div>
	);
}
