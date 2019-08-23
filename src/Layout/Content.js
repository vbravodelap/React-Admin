import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';

export class Content extends Component {
    render() {

      const {title} = this.props;

        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        
                        
                    </section>
                    {/* Main content */}
                        <section className="content container-fluid">
                            <Switch>
                                <Route path='/reports' component={Users}/>>
                            </Switch>
                        </section>
                    {/* /.content */}
                </div>


            </div>
        );
    }
}

export default Content;