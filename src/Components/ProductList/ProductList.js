import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const ProductList = () => {
    const [productData, setProductData] = useState([]);
    const getProductList = async () => {
        await fetch("https://run.mocky.io/v3/cfb3595d-b827-4a9c-b316-f90134a9e785")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProductData(data)
            })

            .catch((error) => {
                console.log("Api Error", error)
            })
    };
    useEffect(() => {
        getProductList();
    }, []);

    return (
        <Container>
            <Row>
                {productData.map((product, index) => {
                    return (
                        <Col md={4} key={index}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{product.product_name}</Card.Title>
                                    <div>
                                        {
                                            product.item_label === "v" ?
                                                <span className='text-success'>veg</span>
                                                :
                                                <span className='text-danger'>Non-veg</span>
                                        }
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default ProductList