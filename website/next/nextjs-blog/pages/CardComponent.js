import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


const cardStyle = { width: "18rem" };

function Example() {
  return (
    <>
      <Card style={cardStyle}>
        <CardImg
          alt="..."
          src={require("assets/img/theme/img-1-1000x600.jpg")}
          top
        ></CardImg>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color="primary" href="javascript:;">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default Example;
