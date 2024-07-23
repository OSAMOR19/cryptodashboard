import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TrendingUp, TrendingDown, ChevronRight } from "lucide-react";
import Ethereum from "../Images/ethlogo.svg";
import Aave from "../Images/aavelogo.svg";
import Pepe from "../Images/shibainu.svg";
import Ton from "../Images/toncoin.svg";
import Star from "../Images/stargatelogo.svg";
import Stake from "../Images/stakeland.svg";
import Uni from "../Images/uniswaplogo.svg";
import Usd from "../Images/usdlogo.svg";
import Az from "../Images/azukinft.svg";
import Bn from "../Images/beansnft.svg";
import Per from "../Images/personanft.svg";
import Lar from "../Images/laranft.svg";

const CryptoPortfolio = () => {
  const categoryData = [
    { 
      name: "Tokens", 
      value: 38, 
      amount: 3000343, 
      change: 3,
      items: [
        { name: "Ethereum", symbol: "ETH", image: Ethereum, amount: 102.2, value: 4840484, change: 2.5 },
        { name: "Pepe", symbol: "PEPE", image: Pepe, amount: 1000000, value: 500000, change: 10.5 },
        { name: "Shiba Inu", symbol: "SHIB", image: Pepe, amount: 5000000, value: 250000, change: -1.8 },
        { name: "Toncoin", symbol: "TON", image: Ton, amount: 200, value: 750000, change: 5.2 },
        { name: "USD Coin", symbol: "USDC", image: Usd, amount: 10000, value: 10000, change: 0.1 },
      ]
    },
    { 
      name: "DEFI", 
      value: 5, 
      amount: 3000343, 
      change: 15,
      items: [
        { name: "Uniswap", symbol: "UNI", image: Uni, amount: 500, value: 3000000, change: 3.2 },
        { name: "Stargate", symbol: "STG", image: Star, amount: 2000, value: 1000000, change: -2.5 },
        { name: "Stakeland", symbol: "STAKE", image: Stake, amount: 1000, value: 500000, change: 1.8 },
        { name: "Aave", symbol: "AAVE", image: Aave, amount: 50.5, value: 1500000, change: -1.8 },
        { name: "PancakeSwap", symbol: "CAKE", image: Stake, amount: 1500, value: 750000, change: 4.5 },
      ]
    },
    { 
      name: "NFT", 
      value: 38, 
      amount: 3000343, 
      change: -3,
      items: [
        { name: "Azuki", image: Az, price: 15, symbol: "ETH" },
        { name: "Bean", image: Bn, price: 5, symbol: "ETH" },
        { name: "Persona", image: Per, price: 8, symbol: "ETH" },
        { name: "Lara", image: Lar, price: 12, symbol: "ETH" },
      ]
    },
  ];

  const renderCategoryCard = (category) => (
    <Card className="mb-3 rounded-5 card-animate border-0" style={{ backgroundColor: "#F6F6F6" }}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title className="mb-2">{category.name}</Card.Title>
          <Card.Text className="text-muted fs-6">{category.value}</Card.Text>
        </div>
        <div className="text-end">
          <Card.Text className="fs-2 mb-0 mt-3 mb-4">${category.amount.toLocaleString()}</Card.Text>
          <Card.Text>
            <span
              className="rounded-pill px-2 py-1"
              style={{
                backgroundColor: category.change >= 0 ? 'rgba(5, 254, 82, 0.07)' : 'rgba(254, 5, 5, 0.07)',
                color: category.change >= 0 ? '#05FE52' : '#FE0505'
              }}
            >
              {category.change >= 0 ? <TrendingUp size={16} className="me-1" /> : <TrendingDown size={16} className="me-1" />}
              {Math.abs(category.change)}%
            </span>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );

  const renderCoinCard = (coin) => (
    <Card className="mb-3 border-0 rounded-4" style={{ backgroundColor: "#F6F6F6" }}>
      <Card.Body className="d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center">
          <img src={coin.image} alt={coin.name} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
          <div>
            <Card.Title className="mb-0 fs-6">{coin.name}</Card.Title>
            <Card.Text className="text-muted mb-0" style={{ fontSize: "0.8rem" }}>{coin.symbol}</Card.Text>
          </div>
        </div>
        <div className="text-end">
          <Card.Text className="mb-0 fw-bold">{coin.amount}</Card.Text>
          <Card.Text className="mb-0">${coin.value.toLocaleString()}</Card.Text>
          <Card.Text className="mb-0">
            <span
              className="rounded-pill px-2 py-1"
              style={{
                backgroundColor: coin.change >= 0 ? 'rgba(5, 254, 82, 0.07)' : 'rgba(254, 5, 5, 0.07)',
                color: coin.change >= 0 ? '#05FE52' : '#FE0505',
                fontSize: "0.8rem"
              }}
            >
              {coin.change >= 0 ? <TrendingUp size={12} className="me-1" /> : <TrendingDown size={12} className="me-1" />}
              {Math.abs(coin.change)}%
            </span>
          </Card.Text>
        </div>
        <ChevronRight size={20} className="ms-2 text-muted" />
      </Card.Body>
    </Card>
  );

  const renderNFTCard = (nft) => (
    <Card className="mb-3 border-0 rounded-4" style={{ backgroundColor: "#F6F6F6" }}>
      <Card.Img variant="top" src={nft.image} className="p-3" />
      <Card.Body className="text-center">
        <Card.Title className="mb-0 fs-6">{nft.name}</Card.Title>
        <Card.Text className="mb-0 fw-bold">{nft.price} {nft.symbol}</Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <Container fluid className="mt-3">
      <h1 className="mb-4 text-center mt-4">$438,829.39</h1>
      <Row>
        {categoryData.map((category, index) => (
          <Col md={4} key={index}>
            {renderCategoryCard(category)}
            {category.items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {category.name === "NFT" ? renderNFTCard(item) : renderCoinCard(item)}
              </React.Fragment>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CryptoPortfolio;