import React from "react";
import { Card, CardBody, CardFooter, CardImg } from "reactstrap";

class UnitCard extends React.Component {

    constructor(props) {
        super(props);
    }

    joinToString(values) {
        return values.reduce((acc, cur) => acc + " , " + cur);
    }

    render() {
        return (
            <Card className="card-user card">
                <CardBody className="card-body">
                    <div className="author">
                        <div className="block block-one"/>
                        <div className="block block-two"/>
                        <div className="block block-three"/>
                        <div className="block block-four"/>
                        <CardImg alt="..." className="avatar" style={{border: '0px', height: '150px', width: 'auto'}}
                                 src={this.props.image}/>
                        <h2 className="title">Top {this.props.rank}</h2>
                        <h3>{this.props.name}</h3>
                        <h6 className="">{this.joinToString(this.props.class)}</h6>
                        <h6 className="">{this.joinToString(this.props.origin)}</h6>
                        <h6 className="">total : {this.props.count}</h6>
                    </div>
                    <div className="card-description text-center">
                        <img
                            src={"https://vignette.wikia.nocookie.net/leagueoflegends/images/1/10/Gold.png/revision/latest/scale-to-width-down/20?cb=20181122055358"}/>
                        {this.props.tier}
                    </div>
                </CardBody>
                <CardFooter className="card-footer">
                    <div className="button-container">
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
    tier: 0,
    count: 0
};

export default UnitCard;