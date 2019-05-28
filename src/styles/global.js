/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		text-rendering: optimizeLegibility !important;
		-webkit-font-smoothing: antialiased !important;
		font-family: sans-serif;
	}
`;

export default GlobalStyle;
