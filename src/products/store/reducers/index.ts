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
