import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

class Home extends Component {
    render() {
        return(
            <div className='container'>
                <h3>Home</h3>
            </div>
        );
    }
}

export default connect (mapStateToProps)(Home);
