import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount () {
        menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(err => {
                new Error(`Error status: ${err}`)
                return this.props.menuError(err)
            });
    }

    render() {
        const {menuItems, loading, error, addedToCart} = this.props;

        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <Error/>
        }
        
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem 
                                    key={menuItem.id} 
                                    menuItem={menuItem}
                                    onAddToCart={() => addedToCart(menuItem.id)}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested, 
    menuError,
    addedToCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));