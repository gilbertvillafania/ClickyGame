//sets up the reusable Jumbotron component
import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Parks and Recreation Clicky Game!</h1>
		<h2>Click on any image to earn points, but don't click on the same picture more than once!</h2>
	</header>
);
export default Jumbotron;