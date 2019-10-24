import { Observable, EMPTY } from 'rxjs';
import { switchMap, catchError, ignoreElements, tap, finalize } from 'rxjs/operators';
import { FormikActions } from 'formik';
import { MealPlanApi } from '../../../../_shared/services/api';

export const mealPlanResendEffect = (
  event$: Observable<[AMOMAMA.DTO.MealPlanResend, FormikActions<AMOMAMA.DTO.MealPlanResend>]>
): Observable<never> => {
  return event$.pipe(
    switchMap(
      ([form, { setSubmitting, setStatus }]): Observable<unknown> =>
        MealPlanApi.resend(form).pipe(
          tap((): void => setStatus('submmitted')),
          catchError(
            (): Observable<never> => {
              setStatus('error');
              return EMPTY;
            }
          ),
          finalize((): void => setSubmitting(false))
        )
    ),
    ignoreElements()
  );
};
