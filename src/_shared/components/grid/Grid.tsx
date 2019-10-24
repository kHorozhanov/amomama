import React from 'react';
import './Grid.scss';

export interface GridConfig<T> {
  columns: AMOMAMA.LabeledItem[];
  rows: AMOMAMA.LabeledItem[];
  data: Map<string, T>;
}

export interface GridProps<T> {
  config: GridConfig<T>;
  renderCell: (item: T) => JSX.Element;
  getItemKey: (row: AMOMAMA.LabeledItem, column: AMOMAMA.LabeledItem) => string;
}

export function Grid<T>({ config: { columns, rows, data }, renderCell, getItemKey }: GridProps<T>): JSX.Element {
  return (
    <div className='grid'>
      <div className='grid__header'>
        {columns.map(
          (column): JSX.Element => {
            return (
              <div className='grid__header__cell' key={column.id}>
                {column.label}
              </div>
            );
          }
        )}
      </div>
      <div className='grid__body'>
        {rows.map(
          (row): JSX.Element => {
            return (
              <div key={row.id} className='grid__body__row'>
                <div className='grid__body__row__label'>{row.label}</div>
                {columns.map(
                  (column): JSX.Element => {
                    const itemKey = getItemKey(row, column);
                    const dataItem = data.get(itemKey);
                    return (
                      <div className='grid__body__row__cell' key={column.id}>
                        {dataItem && renderCell(dataItem)}
                      </div>
                    );
                  }
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
