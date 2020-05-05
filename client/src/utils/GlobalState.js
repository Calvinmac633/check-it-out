import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_LIST,
    REMOVE_LIST_ITEM,
    UPDATE_LISTS,
    ADD_LIST,
    ADD_FAVORITE,
    UPDATE_FAVORITES,
    REMOVE_FAVORITE,
    LOADING
} from "./actions";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_LIST:
            return {
                ...state,
                currentList: action.list,
                loading: false
            };

        case UPDATE_LISTS:
            return {
                ...state,
                // lists: [...action.lists],
                currentList: action.list,
                loading: false
            };

        case ADD_LIST:
            return {
                ...state,
                lists: [action.list, ...state.lists],
                loading: false
            };

        // case REMOVE_LIST_ITEM:
        //     return {
        //         ...state.currentList.items,
        //         currentList: state.currentList.items.filter((item) => {
        //             console.log("This is item id", item._id)
        //             console.log("This is action id", action._id)
        //             console.log(item._id === action._id)
        //             return item._id !== action._id; //This is returning a different state, no longer an object, but an array of objects
        //         },
        //         ),
        //     };

        case REMOVE_LIST_ITEM:
            return {
                ...state,
                currentList: {
                    items: state.currentList.items.filter(item => action._id !== item._id) //updated this to have brackets around items
                },
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        //   lists: [], // might not need this?
        currentList: {
            _id: 0,
            codename: "",
            listname: "",
            items: [
                {
                    // id: 0, --> ideally want to add this in
                    _id: 0,
                    itemName: "",
                    quantity: 0,
                    purchased: false
                }
            ]
        },
        //   favorites: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };