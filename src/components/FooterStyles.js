// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 3% 2.5%;
	background:  #000066;
	// position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		// padding: 0px 0px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	max-width: 1000px;
	/* background: red; */
`;

export const Column = styled.div`
	display: ;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
