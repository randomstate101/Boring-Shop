import React from 'react'
import products from '../products'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3' to='../'>
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <strong>{product.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroupItem>
              <strong>Price : ${product.price} </strong>
            </ListGroupItem>
            <ListGroupItem>Description : {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> ${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Availability:</Col>

                  <Col>
                    {' '}
                    {product.countInStock > 0
                      ? `(${product.countInStock})`
                      : 'Out of Stock'}{' '}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item>
                <Row>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
