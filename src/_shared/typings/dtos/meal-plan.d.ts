declare namespace AMOMAMA.DTO {
  interface MealPlanResend {
    email: string;
  }

  interface MealPlanItem {
    rowId: number;
    columnId: number;
    id: number;
    label: string;
    img: string;
  }

  interface MealPlan {
    rows: AMOMAMA.LabeledItem[];
    columns: AMOMAMA.LabeledItem[];
    cell: MealPlanItem[];
  }
}
