import React, { useState } from 'react';
//import PropTypes from 'prop-types'
import { TfiSearch } from 'react-icons/tfi';
import styled, {
    keyframes
} from 'styled-components';
import backgroundBookSearch from '../../assets/backgroundBookSearch.jpg';
import { devices } from '../../utils/constantes';
import { useNavigate } from 'react-router-dom';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const Hero = styled.div`
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${backgroundBookSearch}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    margin: auto;
    @media only screen and (${devices.iphone14}) {
        margin: 5rem auto auto auto;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 5rem auto auto auto;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 5rem auto auto auto;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 5rem auto auto auto;
    }
`;

const HeroBanner = styled('div')`
    text-align: center;
    padding: 0 3rem;
    color: #fff;
    animation: ${Show} 0.5s ease-in;

    @media only screen and (${devices.iphone14}) {
        padding: 0 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 0 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 0 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        padding: 0 1rem;
    }
`;

const HeroTitle = styled('h4')`
    text-transform: uppercase;
    color: #6dd5fa !important;
    font-size: 5rem;
    text-shadow: 0 0 0.3rem purple;
    letter-spacing: 0.3rem;
    font-family: 'Brush Script MT', cursive;
    margin-bottom: 1rem;
    animation: ${Show} 2.5s ease-in;
`;

const HeroSubTitle = styled('p')`
    text-transform: lowercase;
    color: #fff !important;
    font-size: 1.5rem;
    text-shadow: 0 0 0.3rem black;
    letter-spacing: 0.1rem;
    font-family: cursive;
    margin-bottom: 0.5rem;
    animation: ${Show} 2.5s ease-in;
`;

const HeroInput = styled('input')`
    width: 75%;
    padding: 7px 5rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #fafafa;
    border-top-left-radius: 16px;
    color: #2980b9;
    font-weight: 600;
    text-align: center;
    background: transparent;

    &:hover {
        border-bottom: 3px solid #6dd5fa;
        background: #fafafa;
        border-bottom-left-radius: 16px;
        animation: 3s ease-in-out;
    }

    &:active {
        border-bottom: 3px solid #6dd5fa;
        background: transparent;
        border-bottom-left-radius: 16px;
        animation: 3s ease-in-out;
    }

    @media only screen and (${devices.iphone14}) {
        width: 55%;
        padding: 7px 1rem;
        text-align: left !important;
        &::placeholder {
            font-size: 0.8rem;
        }
    }
    @media only screen and (${devices.mobileG}) {
        width: 55%;
        padding: 7px 1rem;
        &::placeholder {
            font-size: 0.8rem;
        }
    }
    @media only screen and (${devices.mobileM}) {
        width: 45%;
        padding: 7px 1rem;
        &::placeholder {
            font-size: 0.8rem;
        }
    }
    @media only screen and (${devices.mobileP}) {
        width: 40%;
        padding: 7px 2rem 7px 14px;
        &::placeholder {
            font-size: 0.8rem;
        }
    }
`;

const HeroButton = styled('button')`
    margin-top: 4rem;
    padding: 7px 2rem;
    outline: none;
    font-size: 1rem;
    border: none;
    border-left: 1px solid black;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: #fff;
    &:hover {
        outline: none;
        border: none;
        border-left: 1px solid black;
        border-bottom: 3px solid #6dd5fa;
        color: black;
        background: #fff;
    }

    &:active {
        outline: none;
        border-bottom: 3px solid #6dd5fa;
        color: black;
        background: #fff;
    }
    @media only screen and (${devices.iphone14}) {
        padding: 7px 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 7px 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 7px 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        padding: 7px 1rem;
    }
`;

const Home = props => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <header>
                <Hero className="hero">
                    <HeroBanner className="hero-banner">
                        <HeroTitle className="title">
                            book store
                        </HeroTitle>
                        <HeroSubTitle>
                            "People don't
                            understand how a man's
                            entire life can be
                            changed by a single
                            book."
                        </HeroSubTitle>
                        <HeroInput
                            type="text"
                            className="input-bar"
                            onChange={e =>
                                setName(
                                    e.target.value
                                )
                            }
                        />
                        <HeroButton
                            className="hero-button"
                            onClick={() =>
                                navigate(
                                    '/' + name
                                )
                            }
                        >
                            <TfiSearch
                                size={12}
                            />{' '}
                            Find
                        </HeroButton>
                    </HeroBanner>
                </Hero>
            </header>
        </>
    );
};

Home.propTypes = {};

export default Home;
