import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import {
    //Link,
    //useHref,
    //useNavigate,
    useParams
} from 'react-router-dom';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import Cards from '../cards/Cards';
import Loading from '../load/Loading';
import nofoto from '../../assets/nofoto.png';

const ContainerMain = styled.div`
    margin: 5rem auto;
    display: flex;
    gap: 2.5rem;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15rem auto 1rem auto;
    color: gray;
`;

const apiURL = process.env.REACT_APP_API_URL_MAIN;
const apiKey = process.env.REACT_APP_API_KEY;

const Main = props => {
    const params = useParams();
    //console.log(params.name);

    //const navigate = useHref();

    const [books, setBooks] = useState([]);

    const getBooks = name => {
        const topURL = `${apiURL}?q=${name}=free-ebooks&${apiKey}&maxResults=40`;
        axios
            .get(topURL)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getBooks(params.name);
    }, [params.name]);

    return (
        <>
            <ResultContainer className="results">
                Results search:
                <h4 style={{ color: '#6DD5FA' }}>
                    {params.name}...
                </h4>
            </ResultContainer>
            <ContainerMain className="container-main">
                {books && books.length === 0 && (
                    <Loading
                        speedborder="0.6"
                        border="dotted #6DD5FA"
                        size="2"
                    />
                )}

                {books && books.length > 0 ? (
                    books.map(item => {
                        let thumbnail =
                            item.volumeInfo
                                .imageLinks &&
                            item.volumeInfo
                                .imageLinks
                                .smallThumbnail;
                        let epubEBookIsAvaiable =
                            item.accessInfo.epub
                                .isAvailables;

                        let epubPdfIsAvaiable =
                            item.accessInfo.pdf
                                .isAvailable;
                        return (
                            <div
                                key={item.id}
                                active="true"
                            >
                                <Cards
                                    title={
                                        item
                                            .volumeInfo
                                            .title
                                    }
                                    image={
                                        thumbnail ||
                                        nofoto
                                    }
                                    author={
                                        item
                                            .volumeInfo
                                            .authors
                                    }
                                    isEBookAvaiable={
                                        epubEBookIsAvaiable
                                    }
                                    active={true}
                                    isPDFAvaiable={
                                        epubPdfIsAvaiable
                                    }
                                    showLink={
                                        item
                                            .volumeInfo
                                            .previewLink
                                    }
                                />
                            </div>
                        );
                    })
                ) : (
                    <p
                        style={{
                            color: '#FAFAFA'
                        }}
                    >
                        No Results
                    </p>
                )}
            </ContainerMain>
        </>
    );
};

Main.propTypes = {};

export default Main;
