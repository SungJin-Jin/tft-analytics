import React from "react";

import {Col, Row} from "reactstrap";
import UnitCard from "./UnitCard";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col xs="6">
                <UnitCard rank="1" name="KogMaw" tier="1"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="6">
                <UnitCard rank="2" name="Taric" tier="5"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <UnitCard rank="3" name="Olaf" tier="4"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="4" name="Warwick" tier="1"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="5" name="DrMundo" tier="3"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="6" name="Singed" tier="5"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <UnitCard rank="7" name="Skarner" tier="2"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="8" name="Volibear" tier="2"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="9" name="MasterYi" tier="5"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
              <Col xs="3">
                <UnitCard rank="10" name="Annie" tier="4"
                          image="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Aatrox_Justicar_Render.png/revision/latest/scale-to-width-down/132?cb=20191109211009"/>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

export default Dashboard;
