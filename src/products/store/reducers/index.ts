import * as fromPizzas from './pizzas.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface IProductState {
  pizzas: fromPizzas.IPizzaState;
}

export const reducers: ActionReducerMap<IProductState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<IProductState>(
  'products'
);

// pizzas state
export const getPizzaState = createSelector(
  getProductsState,
  (state: IProductState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzas
);
