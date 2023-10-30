import React from "react";
import image4 from "./logo.png"
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="#"> 
				<img
                      className="card-img img-fluid"
                      src={image4}
                      alt="Card"
                      height={"100"}
					  style={{width:"58px"}}
          />
				</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
					<NavLink to="/about" activeStyle>
						Home
					</NavLink>
					<NavLink to="/contact" activeStyle>
						 Cyber Bits Security
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						About us
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Contact Us
					</NavLink>
                    
                        <NavLink to="./login" className="" style={{border:"2px solid ivory",borderRadius:"6px"}}><i className="fa fa-sign-in-alt mr-1"></i> MyAccount</NavLink>
                   
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
