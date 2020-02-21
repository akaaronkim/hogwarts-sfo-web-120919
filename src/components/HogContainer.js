import React, {Component} from 'react';
import HogCard from './HogCard';



class HogContainer extends Component {
    render () {

        return (
            <div>
                {this.props.hogs.map( hog => {
                 return <HogCard hog={hog}/>
                })}
            </div>
        )
    }
}

export default HogContainer; 