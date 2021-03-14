import React from "react";
import StarRating from "./star-rating";
import ReviewList from "./review-list";



export default class MovieWidget extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header movie">
                    <span className="title">{this.props.title}</span><br />{this.props.releaseYear}
                </div>
                <div className="card-body">
                    <img src={this.props.uri} alt="Movie Poster" className="container" />{' '}
                    <br />
                    <p>
                        <b>{this.props.StarRating}</b>
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