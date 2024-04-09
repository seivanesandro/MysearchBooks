import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerFooter = styled.div`
    padding: 5rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #333;
    color: #aba7a7;
    text-transform: lowercase;
    letter-spacing: 2px;
    font-size: 0.9rem !important;
`;
const FooterLabel = styled.label``;
const FooterName = styled.span``;

const Footer = props => {
    return (
        <>
            <ContainerFooter
                className="container-footer"
                style={{
                    borderTop:
                        '0.1rem solid rgba(255, 255, 255)',
                    boxShadow:
                        ' 0 0 0.7rem #6DD5FA'
                }}
            >
                <FooterLabel
                    htmlFor="footer"
                    className="footer-label"
                >
                    <FooterName
                        name="footer"
                        className="code"
                    >
                        sandroseivane@copyrights -
                        2024
                    </FooterName>
                </FooterLabel>
                <p>
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                        <img
                            style={{
                                border: '0',
                                width: '88px',
                                height: '31px'
                            }}
                            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                            alt="Valid CSS!"
                        />
                    </a>
                </p>
            </ContainerFooter>
        </>
    );
};

Footer.propTypes = {};

export default Footer;
