import React from 'react';
import PropTypes from 'prop-types';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';
import { Link } from 'react-router-dom';
import nofoto from '../../assets/nofoto.jpg';

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

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    animation: ${Show} 2.5s linear;

    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatil}) {
    }

    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
`;

const CardBody = styled.div`
    width: 13rem;
    margin: 2rem auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    color: #fff !important;
    font-size: 1.2rem;
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
`;

const ImgStyle = styled.img`
    border: transparent;
    box-shadow: 0 0 0.4rem rgb(61, 61, 61);
    &:hover {
        border: 1px solid #fff;
        box-shadow: 0 0 0.9rem #6dd5fa;
    }
`;

const AuthorStyle = styled.span`
    color: #aba7a7;
    font-size: 0.9rem;
`;

const HasStyle = styled('span')`
    color: #aba7a7;
    font-size: 0.8rem;
`;

const Cards = ({
    title,
    author,
    image,
    isEBookAvaiable,
    isPDFAvaiable,
    showLink
}) => {
    return (
        <>
            <CardContainer className="Card">
                <ImgStyle
                    src={image}
                    alt={title}
                    className="img-fluid w-50"
                    style={{
                        width: '115px',
                        height: '140px'
                    }}
                />
                <CardBody className="card-body text-center">
                    <h5
                        className="cardtitle text-light d-inline-block text-truncate"
                        style={{
                            maxWidth: '14rem'
                        }}
                    >
                        {title}
                    </h5>
                    <AuthorStyle
                        className="d-inline-block text-truncate"
                        style={{
                            maxWidth: '14rem'
                        }}
                    >
                        By {author}
                    </AuthorStyle>
                    <HasStyle>
                        Ebook:{' '}
                        {isEBookAvaiable &&
                        isEBookAvaiable ? (
                            <strong
                                style={{
                                    color: 'green'
                                }}
                            >
                                yes
                            </strong>
                        ) : (
                            <strong className="isNotAvaiable">
                                no
                            </strong>
                        )}
                    </HasStyle>
                    <HasStyle>
                        PDF:{' '}
                        {isPDFAvaiable ? (
                            <strong
                                style={{
                                    color: 'green'
                                }}
                            >
                                yes
                            </strong>
                        ) : (
                            <strong className="isNotAvaiable">
                                no
                            </strong>
                        )}
                    </HasStyle>
                    <div className="card-text">
                        <Link
                            to={showLink}
                            target="_blank"
                            className="btn btn-sm btn-primary text-light border-0 rounded-pill px-3 py-1"
                        >
                            more info
                        </Link>
                    </div>
                </CardBody>
            </CardContainer>
        </>
    );
};

Cards.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.array.isRequired
};

Cards.defaultProps = {
    image: { nofoto },
    title: '',
    author: [],
    isEBookAvaiable: true,
    isPDFAvaiable: true
};

export default Cards;
/*

let thumbnail =item.volumeInfo .imageLinks &&  item.volumeInfo.imageLinks.smallThumbnail;
let epubAvailable = item.accessInfo.epub.isAvailable.toString();


*/
