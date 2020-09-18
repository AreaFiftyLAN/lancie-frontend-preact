import { h, render } from "preact";

import Main from "./Main";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
	render(<Main />, document.body);
};

/**
 * Include the debug code if it's a development build.
 */
if (process.env.NODE_ENV === "development") {
	require("preact/debug");
}

/**
 * Let's start!
 */
start();
