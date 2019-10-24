import React from 'react';
import * as RxHooks from 'rxjs-hooks';
import { Grid, Card } from '../../../_shared/components';
import { mealPlanGridEffect, MealPlanRequestInfo } from './state/meal-plan-grid.effects';

export function MealPlanGrid(): JSX.Element {
  const { loading, data, error } = RxHooks.useObservable<MealPlanRequestInfo>(mealPlanGridEffect, {
    loading: true
  });
  const getItemKey = React.useCallback(
    (row: AMOMAMA.LabeledItem, column: AMOMAMA.LabeledItem): string => `${row.id}_${column.id}`,
    []
  );
  const renderCell = React.useCallback(({ label, img }: AMOMAMA.DTO.MealPlanItem): JSX.Element => {
    return <Card label={label} img={img} />;
  }, []);
  return (
    <>
      {data && <Grid config={data} getItemKey={getItemKey} renderCell={renderCell} />}
      {error && 'Error'}
      {loading && 'Loading'}
    </>
  );
}
