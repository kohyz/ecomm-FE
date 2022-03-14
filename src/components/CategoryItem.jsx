import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 50px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

function CategoryItem({ props }) {
  return (
    <Container>
      <Image src={props.img} />
      <Info>
        <Title>{props.title}</Title>
        <Button>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            SHOP NOW
          </Link>
        </Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
