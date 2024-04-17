import React from "react";
import SimpleCounter from "/workspaces/counter-react-2/src/js/component/SimpleCounter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter />
		</div>
	);
};

export default Home;
