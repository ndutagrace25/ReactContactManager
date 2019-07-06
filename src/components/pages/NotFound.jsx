import React, { Component } from 'react';
class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="display-4">
                    <span className="text-danger">404 Page Not Found</span>
                </h1>
                <p className="lead">Sorry that page doesn't exist</p>
            </div>
         );
    }
}
 
export default NotFound;