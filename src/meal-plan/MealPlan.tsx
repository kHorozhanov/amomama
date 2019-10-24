import React from 'react';
import { MealPlanHeader, MealPlanResend, MealPlanGrid } from './components';
import { mealPlanReducer, MealPlanState } from './state';

export function MealPlan(): JSX.Element {
  const initialState: MealPlanState = {
    showResend: true
  };
  const [state, updateState] = React.useReducer(mealPlanReducer, initialState);
  return (
    <div className='container'>
      <MealPlanHeader />
      {state.showResend && <MealPlanResend onClose={(): void => updateState({ showResend: false })} />}
      <MealPlanGrid />
    </div>
  );
}
