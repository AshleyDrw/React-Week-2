import React from "react";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            starRating: ' ',
            starRatings: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            starRating: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.resetForm();
    }

    addStarRating() {
        let starRatings = this.state.starRatings;
        starRatings.push(this.state.starRating);
        this.setState({
            starRatings,
        });
    }

    listStarRatings() {
        let starRatings = this.state.starRatings;
        return (
            <ul>
                {starRatings.map((value, index) => {
                    return (
                        <li key={`${index}`} className="stars">
                            {value}☆
                        </li>
                    );
                })}
            </ul>
        );
    }

    resetForm() {
        this.setState({
            starRating: ' ',
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {this.listStarRatings()}
                    <form onSubmit={this.handleSubmit}>
                        <b>Rate this title!</b>
                        <br />
                        <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="1"
                              checked={this.state.starRating === "1"}
                              onChange={this.handleChange}
                            />
                            <label className="form-check-label">☆</label>  
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="2"
                              checked={this.state.starRating === "2"}
                              onChange={this.handleChange}
                            />
                            <label className="form-check-label">☆☆</label>  
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="3"
                              checked={this.state.starRating === "3"}
                              onChange={this.handleChange}
                            />
                            <label className="form-check-label">☆☆☆</label>  
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="4"
                              checked={this.state.starRating === "4"}
                              onChange={this.handleChange}
                            />
                            <label className="form-check-label">☆☆☆☆</label>  
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="5"
                              checked={this.state.starRating === "5"}
                              onChange={this.handleChange}
                            />
                            <label className="form-check-label">☆☆☆☆☆</label>
                            <br />  
                        </div>
                        <br />
                        <button
                          className="btn btn-primary"
                          onClick={() => this.addStarRating()}
                        > Add Rating
                        </button>  
                    </form>
                </div>
            </div>
        );
    }
}
