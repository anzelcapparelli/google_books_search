import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "../Grid";

function Book(props) {
    return (
        <>
            <Card style={{ width: "80%" }}>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col size="md-2">
                                {props.image && <img src={props.image.thumbnail} alt={props.title} className="mb-3 mt-3" />}
                            </Col>
                            <Col size="md-4">
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{(props.authors) && `by ${props.authors.join(", ")}`}</Card.Subtitle>
                            </Col>
                            <Col size="md-6">
                                <div className="d-flex justify-content-end">
                                    <Card.Link href={props.link} rel="noreferrer" target="_blank" className="btn btn-warning">View</Card.Link>
                                    {props.pagetype === "search" ?
                                        <Card.Link><button onClick={props.btn} value={props.gbID} className="btn btn-warning">Save</button></Card.Link>
                                        :
                                        <Card.Link><button onClick={props.btn} value={props._id} className="btn btn-warning">Delete</button></Card.Link>
                                    }
                                </div>
                            </Col>
                        </Row>

                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Card.Text>
                            {(props.genres) && `genres: ${props.genres.join(", ")}`}
                            {/* genres: {genres} */}
                        </Card.Text>
                        <Card.Text>
                            {(props.pages) && `${props.pages} pages`}
                        </Card.Text>

                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}

export default Book;
