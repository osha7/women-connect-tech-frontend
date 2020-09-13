import React from 'react';
import '../css/wct.css';
import WTConnect from '../components/wtconnect/wtconnect';
import { connect } from 'react-redux';

class WomenConnect extends React.Component {
    render() {
        // console.log('wtc container', this.props)
        return (
        <div className="wct-container" >
            {/* <div className="wct-header">
                
            </div> */}
            <br /> <br /> 
            <div className="wct-sub-container">
                <WTConnect />
            </div>
        </div>
        )
    }
}

export default connect()(WomenConnect)