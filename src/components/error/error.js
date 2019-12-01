import React, {Component} from 'react';
import {menuError} from '../../actions';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
class Error extends Component {
    componentDidMount (){
        this.props.menuError();
    }

    render (){
        return(
            <div style={{color: "white", textAlign: "center"}} className="error">Error</div>
        )
    }


}
const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuError
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Error));

//  export default Error;
