import React from 'react';


export default class Navigation extends React.Component {
    render() {
        return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="navigation.js">Movie Reviews</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="navigation.js">Black Films<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="navigation.js">Comedy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="navigation.js">Action</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <br />
           </div>
        ) 
    }
}
