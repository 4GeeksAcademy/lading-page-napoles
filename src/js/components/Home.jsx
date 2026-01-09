import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<div className="container my-5">
				<Jumbotron />

				<div className="row text-center mt-4">
					<div className="col-md-3 mb-4">
						<Card />
					</div>
					<div className="col-md-3 mb-4">
						<Card />
					</div>
					<div className="col-md-3 mb-4">
						<Card />
					</div>
					<div className="col-md-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
		</div>


	);
};

export default Home;