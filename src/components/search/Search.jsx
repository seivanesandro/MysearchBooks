import axios from 'axios';
import React, {
    useEffect,
    useState
} from 'react';
import { useParams } from 'react-router-dom';
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

const Search = () => {
    const params = useParams();
    //console.log(params.name);

    const [books, setBooks] = useState([]);


    
    const getBooks = name => {
        axios
            .get( `${apiURL}?q=subject:${name}&${apiKey}&maxResults=40` )
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
                                .isAvailable;

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

export default Search;
