import React from "react";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <ReviewForm />
                </div>
            </div>
        );
    }
}