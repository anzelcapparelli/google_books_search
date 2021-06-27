import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "../components/Grid";
import Book from "../components/Book";


function bookSearchResult(result) {


    const resultClean = result.data.items.map(obj => {
        const { id, volumeInfo: {
            title, authors, description,
            pageCount, categories, infoLink
            ,
            imageLinks
        }
        } = obj;

        return ({
            gbID: id, title, authors,
            description, pages: pageCount, genres: categories,
            link: infoLink
            , image: imageLinks
        });
    })

    return (resultClean);
}

function Search() {

    const [searchList, setSearchList] = useState([]);
    const [formSearch, setFormSearch] = useState({});


    // starting search
    useEffect(() => {
        API.getSearch("Harry Potter")
            .then(res => {
                setSearchList(bookSearchResult(res));
            })
            .catch(err => console.log(err));
    }, [])



    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormSearch({ [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formSearch.query) {
            API.getSearch(formSearch.query)
                .then(res => {
                    setSearchList(bookSearchResult(res));
                })
                .catch(err => console.log(err));
        }
    }

    function handleSave(event) {
        event.preventDefault();
        // const bookToSave= JSON.parse(event.target.value);
        let bookToSave = searchList.filter(book => {
            return event.target.value === book.gbID;
        })
        bookToSave = bookToSave[0];

        API.saveBook(bookToSave)
            .catch(err => console.error(err))
    }


    return (


        <div>
            <h1>Search for Books</h1>

            <form>
                <Container fluid>
                    <Row>
                        <Col size="11">
                            <Input
                                onChange={handleInputChange}
                                name="query"
                                placeholder="Harry Potter"
                            // is label an attr?
                            />
                        </Col>
                        <Col size="1">
                            <FormBtn

                                disabled={!formSearch.query}
                                onClick={handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </Col>
                    </Row>
                </Container>

            </form>

            {searchList.length ? (
                <div>
                    <h2>Results</h2>
                    {searchList.map(searchBook => {

                        return (

                            <div key={searchBook.gbID}>
                                <Book {...searchBook}></Book>

                            </div>
                        );
                    })}
                </div>
            ) : (
                <h3>No Results to Display</h3>
            )}

        </div>
    );

}
export default Search;