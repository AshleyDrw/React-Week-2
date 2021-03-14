import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            review: ' ',
            reviews: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            review: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefalut();
        this.resetForm();
    }

    addReview() {
        let reviews = this.state.reviews;
        reviews.push(this.state.review);
        this.setState({
            reviews,
        });
    }

    listReviews() {
        let reviews = this.state.reviews;
        return (
            <ul>
                {reviews.map((value, index) => {
                    return (
                        <li key={`${index}`} className="review">
                            {value}
                        </li>
                    );
                })}
            </ul>
        );
    }

    resetForm() {
        this.setState({
            value: ' ',
        });
    }

    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    {this.listReviews()}
                    <label>
                        <b>Leave a Review:</b>
                    </label>
                    <br />
                    <textarea
                      className="form-control"
                      rows="5"
                      cols="100"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                </form>
                <br />
                    <button
                      className="btn btn-primary"
                      onClick={() => this.addReview()}
                    >Submit
                    </button>
            </div>
        );
    }
}