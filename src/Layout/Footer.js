import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                {/* To the right */}
                <div className="pull-right hidden-xs">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright © 2016 <a href="fake_url">Company</a>.</strong> All rights reserved.
                </footer>
            </div>
        );
    }
}

export default Footer;
