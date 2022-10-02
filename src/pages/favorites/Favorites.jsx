import { Col, Row } from "antd";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.favoriteReducer);

  const dispatch = useDispatch();

  const empty = () => {
    dispatch({ type: "EMPTY_FAVORITE", payload: "" });
    notify();
  };

  const notify = () => {
    toast.success("Favorites cleaned successfully", {
      duration: 1500,
      position: "bottom-right",
      theme: {
        primary: "green",
        secondary: "black",
      },
    });
  };
  return (
    <>
      <div className="container">
        <h1>Favorites</h1>
        <div style={{ marginTop: "40px" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Col>
              <button onClick={() => empty()}>Empty</button>
            </Col>
            <Col>
              <h2>
                <b>Count:</b> {favorites.length}
              </h2>
              <ul style={{ margin: "0", padding: "0" }}>
                {favorites &&
                  favorites.map((item, key) => (
                    <li
                      style={{
                        listStyle: "none",
                        margin: "0",
                        marginBottom: "10px",
                      }}
                      key={key}
                    >
                      {key + 1}. {item.givenName} {item.familyName}{" "}
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
          <Toaster />
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Favorites;
