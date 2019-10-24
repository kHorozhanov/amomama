import React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
import * as Yup from 'yup';
import * as RxHooks from 'rxjs-hooks';
import classNames from 'classnames';
import { mealPlanResendEffect } from './state/meal-plan-resend.effects';
import { Dialog } from '../../../_shared/components';
import './MealPlanResend.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
});

export interface MealPlanResendProps {
  onClose: () => void;
}

export function MealPlanResend({ onClose }: MealPlanResendProps): JSX.Element {
  const [resend] = RxHooks.useEventCallback(mealPlanResendEffect);

  return (
    <Dialog onClose={onClose}>
      <div className='meal-plan-resend'>
        <p>Enter email if you wish to resend the meal plan link</p>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(value, formikActions: FormikActions<AMOMAMA.DTO.MealPlanResend>): void =>
            resend([value, formikActions])
          }
          validationSchema={validationSchema}
          render={(props: FormikProps<AMOMAMA.DTO.MealPlanResend>): JSX.Element => {
            if (props.status === 'submitted') onClose();
            const inputClassNames = classNames('input', props.errors.email && 'input--has-error');
            return (
              <form className='meal-plan-resend__form' onSubmit={props.handleSubmit}>
                <input
                  name='email'
                  onChange={props.handleChange}
                  className={inputClassNames}
                  type='text'
                  placeholder='E-mail'
                />
                <button className='btn btn__success' type='submit'>
                  Submit
                </button>
                {props.isSubmitting && 'Submitting'}
                {props.status === 'error' && 'Error'}
              </form>
            );
          }}
        />
      </div>
    </Dialog>
  );
}
