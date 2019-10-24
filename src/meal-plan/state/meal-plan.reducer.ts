export interface MealPlanState {
  showResend: boolean;
}
export function mealPlanReducer(state: MealPlanState, updates: Partial<MealPlanState>): MealPlanState {
  return {
    ...state,
    ...updates
  };
}
