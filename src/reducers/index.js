const initialState = {
    menu: [],
    loading: true,
    error: false, 
    items:[	],
    total:0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
                console.log('state',state);
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id)
            const itemAct = state.items.find(itemAct => itemAct.id === id)
            const priceItem = state.total + item.price;
            if (itemAct) {
                console.log(0);
            } else {
                console.log(1);
            }


            
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: item.count
            };
            return {
                ...state,
                total: priceItem,
                items:[
                    ...state.items,
                    newItem
                ]
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const it = state.items.find(it => it.id === idx);
            const priceIt = state.total - it.price;
            return {
                ...state,
                total: priceIt,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };
            default:
            return state;
    }
}

export default reducer;