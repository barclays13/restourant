const menuLoaded = (newMenu) => {
    return {
        type : 'MENU_LOADED',
        payload: newMenu
    };
};
const menuRequested = () => {
    return {
        type : 'MENU_REQUESTED'
    };
};
const menuError = (error) => {

    return {
        type : 'MENU_ERROR',
        payload: error
    };
};
const addedToCart = (id) => {
    return {
        type : 'ITEM_ADD_TO_CART',
        payload: id
    };
};
const deleteFromCart = (id) => {
    return {
        type : 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};


export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};