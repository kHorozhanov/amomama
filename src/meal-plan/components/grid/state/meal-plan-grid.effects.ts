import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GridConfig } from '../../../../_shared/components';
import { MealPlanApi } from '../../../../_shared/services/api';

export type MealPlanRequestInfo = AMOMAMA.RequestInfo<GridConfig<AMOMAMA.DTO.MealPlanItem>>;

export const mealPlanGridEffect = (): Observable<MealPlanRequestInfo> => {
  return MealPlanApi.get().pipe(
    map(
      ({ rows, columns, cell }: AMOMAMA.DTO.MealPlan): MealPlanRequestInfo => {
        const data = cell.reduce((dataMap: Map<string, AMOMAMA.DTO.MealPlanItem>, item: AMOMAMA.DTO.MealPlanItem): Map<
          string,
          AMOMAMA.DTO.MealPlanItem
        > => {
          return dataMap.set(`${item.rowId}_${item.columnId}`, item);
        }, new Map());
        return {
          data: {
            rows,
            columns,
            data
          }
        };
      }
    ),
    catchError(
      (error): Observable<MealPlanRequestInfo> => {
        return of({
          error
        });
      }
    )
  );
};
