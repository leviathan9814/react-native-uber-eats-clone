let defaultState = {
    selectedItems: { items: [], restaurantName: "" } as selectedItemsType,
  };

  export type ItemType = {
    name: string,
    image: string,
    price: string,
    reviews: string,
    rating: number,
    categories: [],
  }

  type selectedItemsType = {
    items: Array<ItemType>,
    restaurantName: string
  }
 
  export type InitialStateType = typeof defaultState;

  let cartReducer = (state = defaultState, action: any): InitialStateType => {
    switch (action.type) {
      case "ADD_TO_CART": {
        let newState = { ...state };
  
        if (action.payload.checkboxValue) {
          console.log("ADD TO CART");
  
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
          };
        } else {
          console.log("REMOVE FROM CART");
          newState.selectedItems = {
            items: [
              ...newState.selectedItems.items.filter(
                (item: any) => item.title !== action.payload.title
              ),
            ],
            restaurantName: action.payload.restaurantName,
          };
        }
        console.log(newState, "👉");
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  