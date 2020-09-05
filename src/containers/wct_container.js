import React from 'react';
import '../css/wct.css';
import WTConnect from '../components/wtconnect/wtconnect';
import { connect } from 'react-redux';

class WomenConnect extends React.Component {
    render() {
        // console.log('wtc container', this.props)
        return (
        <div>
            <div className="wct-header">
                <h1>Women Connect in TECH!</h1>
            </div>
            <div className="wct-container">
                <WTConnect />
            </div>
        </div>
        )
    }
}

export default connect()(WomenConnect)