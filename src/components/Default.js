import React, { Component }         from 'react';
/**
 * This class used for if routing is not find displaying 404 error.
 */
class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase ">
                <h1 className="display-3">404</h1>
                <h1>error</h1>
                <h1>page not found</h1>
                <h3>tech requested URL <spa className="text-danger">{this.props.location.pathname}</spa>{"  "}was not found</h3>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Default;