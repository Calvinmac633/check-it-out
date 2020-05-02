import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_LIST,
    REMOVE_LIST,
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

        case REMOVE_LIST:
            return {
                ...state,
                lists: state.lists.filter((list) => {
                    return list._id !== action._id;
                })
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