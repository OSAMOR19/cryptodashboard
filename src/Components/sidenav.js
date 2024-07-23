import React from "react";
import { Nav } from "react-bootstrap";
import { Wallet, TrendingUp, DollarSign, BarChart2, History,Send, Flower2 } from "lucide-react";

const SideNav = () => {
  return (
    <Nav className="flex-column sidebar h-100" style={{ padding: "20px" }}>
        
      <Nav.Link href="#portfolio" className="text-dark">
      <Wallet className="me-2" />
        Portfolio
      </Nav.Link>
      <Nav.Link href="#history" className="text-dark">
      <History className="me-2" />
        History
      </Nav.Link>
      <Nav.Link href="#send" className="text-dark">
      <Send className="me-2" />
        Send
      </Nav.Link>
      <Nav.Link href="#stake" className="text-dark">
      <Flower2 className="me-2" />
        Stake
      </Nav.Link>
    </Nav>
  );
};

export default SideNav;