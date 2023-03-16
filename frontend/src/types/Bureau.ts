export interface IBureau {
  SK_ID_CURR: number;
  SK_ID_BUREAU: number;
  CREDIT_ACTIVE: "Active" | "Closed" | "Sold" | "Bad debt";
  CREDIT_CURRENCY: "currency 1" | "currency 2" | "currency 3" | "currency 4";
  DAYS_CREDIT: number;
  CREDIT_DAY_OVERDUE: number;
  DAYS_CREDIT_ENDDATE?: number;
  DAYS_ENDDATE_FACT: number;
  AMT_CREDIT_MAX_OVERDUE?: number;
  CNT_CREDIT_PROLONG: number;
  AMT_CREDIT_SUM: number;
  AMT_CREDIT_SUM_DEBT?: number;
  AMT_CREDIT_SUM_LIMIT?: number;
  AMT_CREDIT_SUM_OVERDUE: number;
  CREDIT_TYPE: string;
  DAYS_CREDIT_UPDATE: number;
  AMT_ANNUITY?: number;
}
