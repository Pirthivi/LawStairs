import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BgImage from "../Componets/BgImage";

const Articles = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    let data3 = [];
    const fetchData = async () => {
      let data2 = await fetch("http://localhost:9000/v4")
        .then((response) => response.json())
        .then((result) => result);

      data2.forEach((item) => {
        switch (item.category) {
          case "articles":
            data3 = [...data3, item];

            break;

          default:
            break;
        }
      });
      setData(data3);
      data3 = [];
    };

    fetchData();
  }, []);
  let bg = {
    image: "/images/articles.jpg",
  };
  return (
    <Container>
      <Content>
        <BgImage {...bg} />
        {data &&
          data.map((item) => (
            <div key={item._id}>
              {/* {console.log(item._id)} */}
              <FileDiv>
                <div>
                  <a href={item.file}>
                    <img
                      src="/images/pdf.png"
                      alt="nothing"
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <p>{item.fileSize}</p>
                </div>
                <p>{item.fileName}</p>
              </FileDiv>
              <hr />
            </div>
          ))}
      </Content>
    </Container>
  );
};
const Container = styled.div``;

const Content = styled.div`
  position: relative;

  padding: 20px;

  top: 80px;
  width: 100%;
  z-index: 6;
`;
const FileDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  align-items: center;
  & > p {
    color: rgba(249, 240, 240, 1);
    font-size: 30px;
    font-weight: 700;
    font-family: arial, sans-serif;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > a > img {
      border-radius: 50px;
    }
    & > a {
      width: 65px;
      height: 65px;

      padding: 5px;

      /* border: 1px solid transparent; */
      transition: all 0.01s ease-in-out;
      &:hover {
        background-color: rgba(0, 0, 0, 7);
        border: 2px solid white;
        box-shadow: 2px 2px 5px white, -2px -2px 5px white;
        border-radius: 40px;
      }
    }
    & > p {
      font-size: 12px;
      font-weight: 600;
      font-family: "Times New Roman", Times, serif;
      color: rgba(249, 240, 240, 1);
      margin-top: 5px;
    }
  }
`;
const mapStateToProps = (state) => {
  return {
    data: state.input.data,
  };
};

export default connect(mapStateToProps)(Articles);
