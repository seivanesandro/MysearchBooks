import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styles
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';
import { TfiSearch } from 'react-icons/tfi';

//images
import backgroundBookSearch from '../../assets/backgroundBookSearch.jpg';
import bookdesk from '../../assets/bookdesk.jpg';
import bookdesk1 from '../../assets/bookdesk1.jpg';
import bookdesk2 from '../../assets/bookdesk2.jpg';
import bookdesk3 from '../../assets/bookdesk3.jpg';
import bookdesk4 from '../../assets/bookdesk5.jpg';

//import PropTypes from 'prop-types'

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem !important;
    margin: auto;
    padding: 0 0 0 0;

    background-image: url(${backgroundBookSearch}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;

    @media only screen and (${devices.iphone14}) {
        gap: 0;
        padding: 32rem 0 31rem 0;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 0;
        padding: 32rem 0 31rem 0;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 0;
        padding: 30rem 0 31rem 0;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 0;
        padding: 28rem 0 31rem 0;
    }
`;
const HeroBanner = styled('div')`
    margin: 10rem auto 3rem auto;
    animation: ${Show} 0.5s ease-in;

    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
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
const HeroMain = styled('div')`
    margin: 2rem auto;
`;
const HeroGenreOne = styled('div')`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;
    @media only screen and (${devices.iphone14}) {
        justify-content: center;
    }
    @media only screen and (${devices.mobileG}) {
        justify-content: center;
    }
    @media only screen and (${devices.mobileM}) {
        justify-content: center;
    }
    @media only screen and (${devices.mobileP}) {
        justify-content: center;
        gap: 0.4rem;
    }
`;
const ContainerImg = styled('span')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    color: #737373;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow:
        0 0 0.1rem #fafafa,
        0 0 0.1rem #fafafa,
        0 0 0.1rem #fafafa;
    text-decoration: overline;

    &:hover {
        cursor: wait;
        text-decoration: none;
        color: #fafafa;
        font-weight: 600 !important;
        text-shadow:
            0 0 0.1rem #6dd5fa,
            0 0 0.1rem #6dd5fa,
            0 0 0.1rem #6dd5fa;
    }
    @media only screen and (${devices.iphone14}) {
        font-size: 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 0.9rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 0.9rem;
    }
`;
const HeroGenreImg = styled('img')`
    &.img {
        height: 100% !important ;
        margin: 0 auto !important;
        width: 50px;
        box-shadow: 0 0 0.1rem #333;
        @media only screen and (${devices.iphone14}) {
            width: 40px;
        }
        @media only screen and (${devices.mobileG}) {
            width: 40px;
        }
        @media only screen and (${devices.mobileM}) {
            width: 37px;
        }
        @media only screen and (${devices.mobileP}) {
            width: 30px;
        }
        &:hover {
            transform: scale(1.05);
            transform: translateY(25px);
            opacity: 0.8;
            cursor: pointer;
            border: 1px solid #fafafa;
            box-shadow: 0 0 0.7rem #6dd5fa;
        }
    }
`;

const Genre = props => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <header>
                <Hero className="hero">
                    <HeroBanner className="hero-banner">
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
                                    '/genre/' +
                                        name
                                )
                            }
                        >
                            <TfiSearch
                                size={12}
                            />{' '}
                            Find
                        </HeroButton>
                    </HeroBanner>
                    <HeroMain className="main">
                        <HeroGenreOne className="genre1">
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Fantasy"
                                    src={bookdesk}
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/fantasy'
                                        )
                                    }
                                />
                                fantasy
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Love"
                                    src={
                                        bookdesk1
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/love'
                                        )
                                    }
                                />
                                Love
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Drama"
                                    src={
                                        bookdesk3
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/drama'
                                        )
                                    }
                                />
                                Drama
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Action"
                                    src={
                                        bookdesk2
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/action'
                                        )
                                    }
                                />
                                Action
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="History"
                                    src={
                                        bookdesk4
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/history'
                                        )
                                    }
                                />
                                History
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Adventure"
                                    src={bookdesk}
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/adventure'
                                        )
                                    }
                                />
                                Adventure
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Crime"
                                    src={
                                        bookdesk2
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/comedy'
                                        )
                                    }
                                />
                                Crime
                            </ContainerImg>
                            <ContainerImg className="container-img">
                                <HeroGenreImg
                                    className="img"
                                    title="Anime"
                                    src={
                                        bookdesk3
                                    }
                                    alt=""
                                    onClick={() =>
                                        navigate(
                                            '/genre/anime'
                                        )
                                    }
                                />
                                Anime
                            </ContainerImg>
                        </HeroGenreOne>
                    </HeroMain>
                </Hero>
            </header>
        </>
    );
};

Genre.propTypes = {};

export default Genre;
