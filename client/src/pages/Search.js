import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Search() {

    const [searchList, setSearchList] = useState([]);

    // need form input as well!

    function BookSearchResult(result) {
        // const { id, volumeInfo: {
        //     title, authors, description,
        //     pageCount, categories, infoLink,
        //     imageLinks: { thumbnail } }
        // } = result.data.items

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
                // , image: imageLinks
            });
        })

        console.log(resultClean);

        return setSearchList(resultClean);
    }

    useEffect(() => { console.log(searchList) }, [searchList])

    useEffect(() => {
        API.getSearch("Harry Potter")
            .then(res => {
                BookSearchResult(res);
            })
            .catch(err => console.log(err));
    }, [])

    // function handleInputChange(event) {
    //     // add code to control the components here
    //     const { name, value } = event.target;
    //     //get the property that changed
    //     setFormObject({ ...formObject, [name] : value});
    //     //use it to update state 
    //   }

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    // }

    return (
        <div>
            <h1>Results</h1>

            {searchList.length ? (
                <div>
                    {searchList.map(searchBook => {
                        const { gbID,
                            image, 
                            title, authors, pages, genres, link, description } = searchBook;

                        return (
                            <div key={gbID}>

                                <hr />
                                {/* <img src={image.thumbnail} alt={title} /> */}
                                {/* <p>{title} by {authors.join(", ")}</p> */}
                                <p>{title} by {authors}</p>
                                <p>pages: {pages} </p>
                                {/* <p>genres: {genres.join(", ")}</p> */}
                                <p>genres: {genres}</p>
                                <a href={link}> Google Books Page</a>
                                {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                                {/* ^^^ wrong page */}
                                {/* need a save on button click */}
                                <p>{description}</p>
                                <hr />

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