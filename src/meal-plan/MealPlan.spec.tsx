import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { mealPlanReducer, MealPlanState } from './state';
import { MealPlan } from './MealPlan';
import { MealPlanResend } from './components';

describe('<MealPlan />', (): void => {
  let state: MealPlanState;
  let setState: jest.Mock;

  const shallowComponent = (): ShallowWrapper => {
    jest.spyOn(React, 'useReducer').mockReturnValue([state, setState]);
    return shallow(<MealPlan />);
  };

  beforeEach((): void => {
    state = {
      showResend: false
    };
    setState = jest.fn();
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });

  it('should render correctly', (): void => {
    const component = shallowComponent();
    expect(component.debug()).toMatchSnapshot();
  });

  it('should call useReducer', (): void => {
    shallowComponent();
    expect(React.useReducer).toHaveBeenCalledWith(mealPlanReducer, { showResend: true });
  });

  it('should render MealPlanResend when showResend = true', (): void => {
    state.showResend = true;
    const component = shallowComponent();
    expect(component.debug()).toMatchSnapshot();
  });

  it('should call updateState when MealPlanResend onClose fired', (): void => {
    state.showResend = true;
    const component = shallowComponent();
    const mealPlanResend = component.find(MealPlanResend);
    mealPlanResend.prop('onClose')();
    expect(setState).toHaveBeenCalledWith({ showResend: false });
  });
});
