import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";

const Title = styled.h1`
  margin: 20px;
`;

function ProductList() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Title>All Products</Title>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductList;
