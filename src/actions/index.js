const menuLoaded = (newMenu) => {
    console.log('menuLoaded: ');
    return {
        type : 'MENU_LOADED',
        payload: newMenu
    };
};
const menuRequested = () => {
    console.log('menuRequested: ');
    return {
        type : 'MENU_REQUESTED'
    };
};
const menuError = () => {
    console.log('menuError');
    return {
        type : 'MENU_ERROR'
    };
};
const addedToCart = (id) => {
    console.log('addedToCart: ');
    return {
        type : 'ITEM_ADD_TO_CART',
        payload: id
    };
};
const deleteFromCart = (id) => {
    console.log('deleteFromCart: ');
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