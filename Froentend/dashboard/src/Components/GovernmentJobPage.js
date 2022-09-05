import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";
function GovernmentJobPage() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=bbca060407f244dabad0242d2b350a71&q=india"
      )
      .then((response) => {
        setData(response.data.articles);
        console.log(response);
      });
  };
  return (
    <>
      <div className="container my-3">
        <Button variant="Secondary" onClick={getNews}>
          Fetch News
        </Button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={value.urlToImage} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Button variant="primary">Main News</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GovernmentJobPage;
