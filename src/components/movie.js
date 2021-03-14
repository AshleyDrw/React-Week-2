import React from "react";
import StarRating from "./star-rating";
import ReviewList from "./review-list";



export default class Movie extends React.Component {
    render() {
        return (
            <div className="card">
                <div>
                    
                </div>
                <div className="card-body">
                    <img src={this.props.uri} alt="movie promo poster" className="container" />{' '}
                    <br /><br />
                    <div className="title"><h3>{this.props.title}</h3></div>{this.props.year}<br></br>
                    <br></br>{this.props.synopsis}
                    <p>
                        <b>{this.props.starRating}</b>
                        <br />
                    </p>
                </div>
                <div className="card-footer">
                    <StarRating />
                    <br />
                    <ReviewList />
                </div>
            </div>
        );
    }
}