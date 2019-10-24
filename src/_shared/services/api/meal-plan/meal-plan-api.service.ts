import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '../../http/http.service';

export const MealPlanApi = {
  resend: (form: AMOMAMA.DTO.MealPlanResend): Observable<unknown> => {
    return Http.post('/meal-plan/resend', form);
  },
  get: (): Observable<AMOMAMA.DTO.MealPlan> => {
    return Http.get<AMOMAMA.DTO.MealPlan>('/json/get/coMrxUEcqG?indent=2').pipe(
      map(({ data }): AMOMAMA.DTO.MealPlan => data)
    );
  }
};
