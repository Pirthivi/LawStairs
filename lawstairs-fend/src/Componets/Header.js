import React from "react";
import styled from "styled-components";
import BalanceIcon from "@mui/icons-material/Balance";
import { useNavigate, NavLink } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import QuizIcon from "@mui/icons-material/Quiz";
import GaveNavBarLicon from "@mui/icons-material/Gavel";
import "./Header.css";
export default function Header() {
  const Navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user1");
    Navigate("/login");
  };
  return (
    <Container>
      <Section>
        <Logo>
          <img src="/images/lawlogo.jpg" alt="Logo" />
        </Logo>
        <NavBar>
          <NavBarLi to="/judgement">
            <div>
              <BalanceIcon />
            </div>
            <span>Jadgement</span>
          </NavBarLi>
          <NavBarLi to="/articles">
            <div>
              <ArticleIcon />
            </div>
            <span>Articles</span>
          </NavBarLi>

          <NavBarLi to="/Elibrary">
            <div>
              <LibraryBooksIcon />
            </div>
            <span>E-Library</span>
          </NavBarLi>

          <NavBarLi to="/lawgernal">
            <div>
              <GaveNavBarLicon />
            </div>
            <span>Law Gernel</span>
          </NavBarLi>

          <NavBarLi to="/mcqs">
            <div>
              <QuizIcon />
            </div>
            <span>MCQ</span>
          </NavBarLi>

          <NavBarLi to="/books">
            <div>
              <QuizIcon />
            </div>
            <span>Books</span>
          </NavBarLi>
        </NavBar>
      </Section>
      {/* <Link to="/login"> */}
      <Button
        onClick={() => {
          localStorage.getItem("user1") ? handleClick() : Navigate("/login");
        }}
      >
        {localStorage.getItem("user1") ? "Logout" : "Login"}
      </Button>
      {/* </Link> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(0, 0, 10, 0.9);
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 10;
  padding: 0 20px 0;
  border-bottom: 2px solid #ffcccc;
`;
const Section = styled.div`
  display: flex;
`;
const NavBarLi = styled(NavLink)`
  display: flex;
  position: relative;
  align-items: center;
  font-weight: 600;
  align-items: center;

  padding: 5px;
  text-decoration: none;
  &:hover {
    span,
    div {
      color: #ffb8b8;
    }
  }

  span {
    font-size: 15px;
    color: white;
    margin-left: 5px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      background-color: #ffb8b8;
      height: 2px;
      transform: scaleX(0);
      transition: all 0.09s linear;
      transform-origin: left;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
  div {
    color: #f8f8f8;
  }
`;
const NavBar = styled.nav`
  display: flex;
  min-width: 700px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 20px;
  position: relative;
`;

const Logo = styled.div`
  img {
    /* position: absolute; */
    /* background-color: green; */
    width: 100px;
    height: contain;
  }
`;

const Button = styled.button`
  padding: 10px;
  /* display: flex;
  flex-wrap: nowrap; */
  min-width: 110px;
  height: 50px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-size: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 50px;
  outline: none;
  border: 1px soNavBarLid white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
    box-shadow: 3px 5px 5px rgba(249, 249, 249, 0.2);
    color: rgba(249, 249, 249, 0.7);
    cursor: pointer;
  }
`;
