import React from 'react';
import './MealPlanHeader.scss';

export function MealPlanHeader(): JSX.Element {
  return (
    <section className='meal-plan-header'>
      <h1 className='meal-plan-header__title'>Personalized meal plan</h1>
      <p className='meal-plan-header__content'>
        You can also access your meal plan via email that you received
        <br />
        If not received, please contact <a href='mailto:supportdc@bodyfitplan.me'>supportdc@bodyfitplan.me</a>
      </p>
    </section>
  );
}
