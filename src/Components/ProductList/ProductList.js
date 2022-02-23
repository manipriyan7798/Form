import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import "../Api/Fruits.css";
import "./ProductList.css";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const getProductList = async () => {
    await fetch("https://run.mocky.io/v3/cfb3595d-b827-4a9c-b316-f90134a9e785")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductData(data);
      })

      .catch((error) => {
        console.log("Api Error", error);
      });
  };
  useEffect(() => {
    getProductList();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        {productData.map((product, index) => {
          return (
            <Col md={6} lg={6} key={index}>
              <Card style={{ width: "18rem" }} sx={{ alignItems: "center" }}>
                <Card.Img variant="top" src={product.itemImages[0].img_one} />
                <Card.Body sx={{ textAlign: "center" }}>
                  <Card.Title sx={{ textAlign: "center" }}>{product.product_name}</Card.Title>
                  <div>
                    {product.item_label === "v" ? (
                      <span className="text-success">veg</span>
                    ) : (
                      <span className="text-danger">Non-veg</span>
                    )}
                  </div>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>
                    View More
                  </Button>
                </Card.Body>
              </Card>
              {show && (
                <div className="modal_popup">
                  <p>Actual Rate:{product.actual_rate}</p>
                  <p>ProductRating:{product.product_rating}</p>
                  <p>ProductID:{product.product_id}</p>
                  <p>Product Rating:{product.product_rating}</p>
                  <p>Maximum Quantity Allowed:{product.maxAllowedQuantity}</p>
                  <p>Actual Rate:{product.actual_rate}</p>
                  <p>Item label:{product.item_label}</p>
                  <p>Sold:{product.sold}</p>
                  <p>Availability:{product.avaliablity}</p>
                  <Button onClick={handleClose}>Close</Button>
                </div>
              )}
            </Col>

            // <Col md={6} lg={6} sx={{ display: "flex" }} key={index}>
            //   <Card style={{ width: "18rem" }}>
            //     <Card.Img variant="top" src={product.itemImages[0].img_one} />
            //     <Card.Body>
            //       <Card.Title>{product.product_name}</Card.Title>
            //       <div>
            //         {product.item_label === "v" ? (
            //           <span className="text-success">veg</span>
            //         ) : (
            //           <span className="text-danger">Non-veg</span>
            //         )}
            //       </div>
            //       <Card.Text>{product.product_id}</Card.Text>
            //       <Button
            //         variant="primary"
            //         onClick={() => {
            //           handleShow();
            //           // getApi();
            //         }}
            //       >
            //         View more
            //       </Button>
            //     </Card.Body>

            //     <Modal show={show} onHide={handleClose}>
            //       <Modal.Header closeButton>
            //         <Modal.Title>Modal heading</Modal.Title>
            //       </Modal.Header>
            //       <Modal.Body>
            //         <p>Actual Rate:{product.actual_rate}</p>
            //         <p>ProductRating:{product.product_rating}</p>
            //         <p>ProductID:{product.product_id}</p>
            //         <p>Product Rating:{product.product_rating}</p>
            //         <p>Maximum Quantity Allowed:{product.maxAllowedQuantity}</p>
            //         <p>Actual Rate:{product.actual_rate}</p>
            //         <p>Item label:{product.item_label}</p>
            //         <p>Sold:{product.sold}</p>
            //         <p>Availability:{product.avaliablity}</p>
            //         <p>Category:{product.product_category}</p>
            //       </Modal.Body>
            //     </Modal>
            //   </Card>
            // </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
