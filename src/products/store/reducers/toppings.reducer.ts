import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface IToppingState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: IToppingState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: [],
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): IToppingState {
  switch (action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings,
      };
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }
  return state;
}

export const getToppingEntities = (state: IToppingState) => state.entities;
export const getToppingsLoaded = (state: IToppingState) => state.loaded;
export const getToppingsLoading = (state: IToppingState) => state.loading;
export const getSelectedToppings = (state: IToppingState) =>
  state.selectedToppings;
