import React, {Component} from 'react'
import { throws } from 'assert'







class HogCard extends Component {
    getImage = hogName => {
        let formattedName = hogName
          .split(" ")
          .join("_")
          .toLowerCase();
        return formattedName + '.jpg';
        
      };



    render () {
    //    let image = `${this.getImage(this.props.hog.name)}`
        console.log(this.getImage(this.props.hog.name))
       return (
            <div>
                    <img src={`/hog-imgs/${this.getImage(this.props.hog.name)}`}/>
                    <p>Hog name: {this.props.hog.name}</p>
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Weight: {this.props.hog.weight}</p>  
                    <p>Highest Medal: {this.props.hog["highest medal achieved"]}</p> <br></br>
            </div>
        )
    }
}




export default HogCard;