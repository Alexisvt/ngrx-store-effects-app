import { Pizza } from '../../models/pizza.model';
import {
  PizzasAction,
  LOAD_PIZZAS,
  LOAD_PIZZAS_SUCCESS,
  LOAD_PIZZAS_FAIL,
} from '../action/pizzas.action';

export interface IPizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: IPizzaState = {
  data: [
    {
      name: "Blazin' Inferno",
      toppings: [
        {
          id: 10,
          name: 'pepperoni',
        },
        {
          id: 9,
          name: 'pepper',
        },
        {
          id: 3,
          name: 'basil',
        },
        {
          id: 4,
          name: 'chili',
        },
        {
          id: 7,
          name: 'olive',
        },
        {
          id: 2,
          name: 'bacon',
        },
      ],
      id: 1,
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: PizzasAction
): IPizzaState {
  switch (action.type) {
    case LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getPizzasLoading = (state: IPizzaState) => state.loading;
export const getPizzasLoaded = (state: IPizzaState) => state.loaded;
export const getPizzas = (state: IPizzaState) => state.data;
