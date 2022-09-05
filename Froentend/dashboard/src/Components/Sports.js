import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useState } from "react";

function Sports() {
  const [data, setData] = useState([]);
  const getResult = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setData(response.data);
      console.log(response);
    });
  };

  return (
    <>
      <div className="container my-3">
        <Button variant="Secondary" onClick={getResult}>
          Fetch Result
        </Button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.Id}</Card.Text>
                  <Card.ID>{value.userId}</Card.ID>
                  <Button variant="primary">Main Result</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
<div>Different ways to fetch Data</div>;

export default Sports;
