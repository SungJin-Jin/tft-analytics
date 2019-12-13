import React from "react";

import {Col, Row} from "reactstrap";
import UnitCard from "../components/UnitCard/UnitCard";
import {api} from "../shared/http"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {units: []};
    }

    async componentDidMount() {
        let {data: units} = await api.get("/rank");
        this.setState({units});
    }

    render() {
        const {units} = this.state;

        if (units.length === 0) return <div/>;

        return (
            <div className="content">
                <Row>
                    {this.state.units.slice(0, 2).map((unit, index) =>
                        <Col xs="6">
                            <UnitCard rank={index + 1} name={unit.name} tier={unit.tier} image={unit.image}/>
                        </Col>
                    )}
                </Row>
                <Row>
                    {this.state.units.slice(2, 6).map((unit, index) =>
                        <Col xs="3">
                            <UnitCard rank={index + 3} name={unit.name} tier={unit.tier} image={unit.image}/>
                        </Col>
                    )}
                </Row>
                <Row>
                    {this.state.units.slice(6, 10).map((unit, index) =>
                        <Col xs="3">
                            <UnitCard rank={index + 7} name={unit.name} tier={unit.tier} image={unit.image}/>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}

export default Dashboard;
