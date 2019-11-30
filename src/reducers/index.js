const initialState = {
    menu: [],
    loading: true,
    error: false, 
    items:[],
    total:0,
    count: [0,0,0,0,0]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
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
            console.log('action.payload',action.payload);
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id)
            const priceItem = state.total + item.price;
            const countItem = state.items.find(itemCart => itemCart.id === id);
            if(!countItem){
                let counts = [0,0,0,0,0,0];
                let number = counts[id] + 1;
                let count = [
                    ...state.count.slice(0, id),
                    number,
                    ...state.count.slice(id + 1)
                ]
                let newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                };
                return {
                    ...state,
                    total: priceItem,
                    count:count,
                    items:[
                        ...state.items,
                        newItem
                    ]
                };
            }else {
                let number = state.count[id] + 1;
                let count = [
                    ...state.count.slice(0, id),
                    number,
                    ...state.count.slice(id + 1)
                ]
                return {
                    ...state,
                    count:count,
                    total: priceItem,
                    items:[
                        ...state.items,
                    ]
                };
            };

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const it = state.items.find(it => it.id === idx);
            const priceIt = state.total - (it.price*state.count[idx]);
            const number = 0;
            let count = [
                ...state.count.slice(0, idx),
                number,
                ...state.count.slice(idx + 1)
            ]
            return {
                ...state,
                total: priceIt,
                count: count,
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