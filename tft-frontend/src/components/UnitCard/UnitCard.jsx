import React from "react";
import {Button, Card, CardBody, CardFooter, CardImg} from "reactstrap";

class UnitCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="card-user card">
                <CardBody className="card-body">
                    <p className="card-text"></p>
                    <div className="author">
                        <div className="block block-one"></div>
                        <div className="block block-two"></div>
                        <div className="block block-three"></div>
                        <div className="block block-four"></div>
                        <CardImg alt="..." className="avatar"
                                 src={this.props.image}/>
                        <h3 className="title">Top {this.props.rank}</h3>
                        <p className="description">{this.props.name}</p>
                    </div>
                    <div className="card-description text-center">
                        Tier : {this.props.tier}
                    </div>
                </CardBody>
                <CardFooter className="card-footer">
                    <div className="button-container">
                        <Button className="btn-icon btn-round btn btn-facebook"><i className="fab fa-facebook"></i>
                        </Button>
                        <Button className="btn-icon btn-round btn btn-twitter"><i className="fab fa-twitter"></i>
                        </Button>
                        <Button className="btn-icon btn-round btn btn-google"><i className="fab fa-twitter"></i>
                        </Button>
                    </div>
                </CardFooter>
            </Card>

        )
    }
}

UnitCard.defaultProps = {
    name: "NONE",
    class: [],
    origin: [],
    image: "",
    rank: 0,
    tier: 0
};

export default UnitCard;