import React, {Component} from "react";
class PersonCard extends Component{
    constructor(edad){
        super(edad);
        this.state={
            edad: this.props.age
        };
    }
    sumedad=()=>{
        this.setState({edad:this.state.edad+1});
    }
    render() {
        const {firstName,lastName,age,hairColor}=this.props;
        return(
            <div className="tarjeta">
                <h1>{lastName},{firstName}</h1>
                <p>Age: {this.state.edad}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.sumedad}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}
export default PersonCard;