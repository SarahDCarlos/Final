import React from 'react';
import styled from 'styled-components';
import cat from "./images/cat.jpg";


function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
            {/* {column1} */}
        <div className="col-md-3 col-sm-6">
        <img style={{height: "300px"}} src={cat} alt="Logo" />;
        {/* <ul className="list-unstyled">
        
        </ul> */}
        </div>
           {/* {column2} */}
           <div className="col-md-3 col-sm-6">
        <h4>Support</h4>
        <ul className="list-unstyled">
            <li><a href="/">Account</a></li>
            <li><a href="/">info for parents</a></li>
            <li><a href="/">Parental controls</a></li>
            <li><a href="/">Privacy policy</a></li>
        </ul>
        </div>
           {/* {column3} */}
           <div className="col-md-3 col-sm-6">
        <h4>Shop</h4>
        <ul className="list-unstyled">
        <li><a href="/">Games</a></li>
        <li><a href="/">Merchandise</a></li>
        <li><a href="/">Sales & Deals</a></li>
        <li><a href="/">Exclusives</a></li>
        </ul>
        </div>
           {/* {column4} */}
           <div className="col-md-3 col-sm-6">
        <h4>Contact us</h4>
        <ul className="list-unstyled">
        <li><a href="/">Careers</a></li>
        <li><a href="/">lorem ipsum</a></li>
        <li><a href="/">lorem ipsum</a></li>
        <li><a href="/">lorem ipsum</a></li>
        </ul>
        </div>
        </div>
        {/* {Footer Bottom} */}
        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} city Guide App - All Rights Reserved
            </p>

        </div>
        </div>
        </div>
        </FooterContainer>
    )
}

export default Footer;


const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}
`;