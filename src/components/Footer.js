// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "white",
					textAlign: "left",
					marginBottom: "20px",
                    fontSize:"22px"
				}}
			>
				Copyright ©2023 bitss.fr | All Rights Reserved
                <FooterLink href="./contact">
                    <a

                    style={{
                        color:"whitesmoke",
                        textAlign:"right",
                        marginLeft:"40%",
                        fontSize:"12px"

                    }}
                    
                    >Cookie Policy
 
                    Contact Us
                    </a>
							
						</FooterLink>
                        
			</h1>
            <FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
                                        display:"flex",
										marginLeft: "90%",
                                        margin: "90%",
                                        padding:"10px"
									}}
								>
									
								</span>
							</i>
						</FooterLink>
           
                        <FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
                                        display:"flex",
										marginLeft: "90%",
                                        margin: "90%",
                                        padding:"15px"
									}}
								>
									
								</span>
							</i>
						</FooterLink> 
                        <FooterLink href="#">
							<i className="fab fa-linkedin">
								<span
									style={{
                                        display:"flex",
										margin: "90%",
                                        padding:"10px"
                                        
									}}
								>
									
								</span>
							</i>
						</FooterLink>                       
			{/* <FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						
					</Column>
				</Row>
			</FooterContainer> */}
		</Box>
	);
};
export default Footer;
