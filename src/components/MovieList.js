import React, {Fragment} from 'react';
import '../App';
import '../App.css';


export default class MovieList extends React.Component {

    


    render() {
        return (
            <Fragment>
            <button className="primary" >Clickme</button>
            <div className="col-xs-3 col-md-12">
                {this.props.details.map((mov,id) => <img key={id} src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt="" className="img-posters"/>)}
           
            </div>
            
           
            </Fragment>
        )
    }
}