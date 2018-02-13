import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface IProductState {
  pizzas: fromPizzas.IPizzaState;
  toppings: fromToppings.IToppingState;
}

export const reducers: ActionReducerMap<IProductState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

export const getProductsState = createFeatureSelector<IProductState>(
  'products'
);
