import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Blockchain from "../../Images/Blockchain.png";
import Screen2 from "../../Images/Screen2.png";
import Screen3 from "../../Images/Screen3.png";
import Screen4 from "../../Images/Screen4.png";
import CH from "../../Images/CH.png";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import Company from "../Company";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function AppAbout() {
  const cards = [
    {
      title: "Join Development",
      subTitle: "Blockchain Development",
      imgLink: Blockchain,
      type: "Blockchain",
    },
    {
      title: "Join Development",
      subTitle: "Blockchain Development",
      imgLink: Screen2,
      type: "Blockchain",
    },
    {
      title: "Join Development",
      subTitle: "Security AAS",
      imgLink: Screen3,
      type: "Security",
    },
    {
      title: "Join Development",
      subTitle: "Motion Graphic",
      imgLink: Screen4,
      type: "Motion",
    },
    {
      title: "Join Development",
      subTitle: "Blockchain Development",
      imgLink: Blockchain,
      type: "Blockchain",
    },
    {
      title: "Join Development",
      subTitle: "Blockchain Development",
      imgLink: Screen2,
      type: "Blockchain",
    },
    {
      title: "Join Development",
      subTitle: "Security AAS",
      imgLink: Screen3,
      type: "Security",
    },
    {
      title: "Join Development",
      subTitle: "Motion Graphic",
      imgLink: Screen4,
      type: "Motion",
    },
  ];

  const getCardColor = (row) => {
    return row?.type === "Blockchain" ? "blockchain-color" : row?.type === "Security" ? "security-color" : "motion-color"
}

  const getCardDetails = (row) => (
    <Col md={3} className="card-position">
      
      <div className={`${getCardColor(row)} card border-success mb-3`}>
        <div className="card-header bg-transparent border-success title">
        <img src={CH} className="title-img" alt="" />
          {row.title}
        </div>
        <div className="card-body text-success cardBody">
          <p className="cardText">
              <b>{row.subTitle}</b>
            </p>
            <img className="cardImg" src={row.imgLink} alt="" />
        </div>
        <div className="card-footer bg-transparent border-success cardFooter">
        <button className="button arrow">Explore <div className=""><BsArrowRightCircleFill /></div></button>
        </div>
      </div>
    </Col>
  );

  return (
    <>
      <Company />
      <section id="about" className="block about-block">
        <Container fluid>
          <Row>
            <Col md={2} />
            <Col md={8}>
            <div className="title-holder">
            <p className="title-head">Services We Offer</p>
            <div className="subtitle">
              Discover the digital possibilities for your brand with our
              comprehensive suite of servies.
              <div className="icons">
                {" "}
                <FiArrowLeft />
                <FiArrowRightCircle />
              </div>
            </div>
          </div>
              <Row style={{ marginBottom: "1rem" }}>
                {cards.slice(0, 4).map((row, index) => getCardDetails(row))}
              </Row>
              <Row>
                {cards.slice(4, 8).map((row, index) => getCardDetails(row))}
              </Row>
            </Col>
            <Col md={2} />
          </Row>
        </Container>
      </section>
    </>
  );
}
