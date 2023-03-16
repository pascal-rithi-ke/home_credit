export type IClient = {
  AMT_ANNUITY: number;
  AMT_CREDIT: number;
  AMT_GOODS_PRICE: number;
  AMT_INCOME_TOTAL: number;
  AMT_REQ_CREDIT_BUREAU_DAY: number;
  AMT_REQ_CREDIT_BUREAU_HOUR: number;
  AMT_REQ_CREDIT_BUREAU_MON: number;
  AMT_REQ_CREDIT_BUREAU_QRT: number;
  AMT_REQ_CREDIT_BUREAU_WEEK: number;
  AMT_REQ_CREDIT_BUREAU_YEAR: number;
  APARTMENTS_AVG: number;
  APARTMENTS_MEDI: number;
  APARTMENTS_MODE: number;
  BASEMENTAREA_AVG: number;
  BASEMENTAREA_MEDI: number;
  BASEMENTAREA_MODE: number;
  CNT_CHILDREN: number;
  CNT_FAM_MEMBERS: number;
  CODE_GENDER: "M" | "F";
  COMMONAREA_AVG?: number;
  COMMONAREA_MEDI?: number;
  COMMONAREA_MODE?: number;
  DAYS_BIRTH: number;
  DAYS_EMPLOYED: number;
  DAYS_ID_PUBLISH: number;
  DAYS_LAST_PHONE_CHANGE: number;
  DAYS_REGISTRATION: number;
  DEF_30_CNT_SOCIAL_CIRCLE: number;
  DEF_60_CNT_SOCIAL_CIRCLE: number;
  ELEVATORS_AVG?: number;
  ELEVATORS_MEDI?: number;
  ELEVATORS_MODE?: number;
  EMERGENCYSTATE_MODE: string;
  ENTRANCES_AVG: number;
  ENTRANCES_MEDI: number;
  ENTRANCES_MODE: number;
  EXT_SOURCE_1: number;
  EXT_SOURCE_2: number;
  EXT_SOURCE_3: number;
  FLAG_CONT_MOBILE: number;
  FLAG_DOCUMENT_2: number;
  FLAG_DOCUMENT_3: number;
  FLAG_DOCUMENT_4: number;
  FLAG_DOCUMENT_5: number;
  FLAG_DOCUMENT_6: number;
  FLAG_DOCUMENT_7: number;
  FLAG_DOCUMENT_8: number;
  FLAG_DOCUMENT_9: number;
  FLAG_DOCUMENT_10: number;
  FLAG_DOCUMENT_11: number;
  FLAG_DOCUMENT_12: number;
  FLAG_DOCUMENT_13: number;
  FLAG_DOCUMENT_14: number;
  FLAG_DOCUMENT_15: number;
  FLAG_DOCUMENT_16: number;
  FLAG_DOCUMENT_17: number;
  FLAG_DOCUMENT_18: number;
  FLAG_DOCUMENT_19: number;
  FLAG_DOCUMENT_20: number;
  FLAG_DOCUMENT_21: number;
  FLAG_EMAIL: number;
  FLAG_EMP_PHONE: number;
  FLAG_MOBIL: number;
  FLAG_OWN_CAR: "Y" | "N";
  FLAG_OWN_REALTY: "Y" | "N";
  FLAG_PHONE: number;
  FLAG_WORK_PHONE: number;
  FLOORSMAX_AVG: number;
  FLOORSMAX_MEDI: number;
  FLOORSMAX_MODE: number;
  FLOORSMIN_AVG?: number;
  FLOORSMIN_MEDI?: number;
  FLOORSMIN_MODE?: number;
  FONDKAPREMONT_MODE?: string;
  HOUSETYPE_MODE: string;
  LANDAREA_AVG?: number;
  LANDAREA_MEDI?: number;
  LANDAREA_MODE?: number;
  LIVE_CITY_NOT_WORK_CITY: number;
  LIVE_REGION_NOT_WORK_REGION: number;
  LIVINGAPARTMENTS_AVG?: number;
  LIVINGAPARTMENTS_MEDI?: number;
  LIVINGAPARTMENTS_MODE?: number;
  LIVINGAREA_AVG: number;
  LIVINGAREA_MEDI: number;
  LIVINGAREA_MODE: number;
  NAME_CONTRACT_TYPE: "Cash loans" | "Revolving loans";
  NAME_EDUCATION_TYPE:
    | "Higher education"
    | "Secondary / secondary special"
    | "Incomplete higher"
    | "Lower secondary"
    | "Academic degree";
  NAME_FAMILY_STATUS:
    | "Married"
    | "Civil marriage"
    | "Widow"
    | "Single / not married"
    | "Separated";
  NAME_HOUSING_TYPE:
    | "House / apartment"
    | "Rented apartment"
    | "With parents"
    | "Municipal apartment"
    | "Office apartment"
    | "Co-op apartment";
  NAME_INCOME_TYPE:
    | "Working"
    | "State servant"
    | "Commercial associate"
    | "Pensioner"
    | "Unemployed"
    | "Student"
    | "Businessman"
    | "Maternity leave";
  NAME_TYPE_SUITE:
    | "Unaccompanied"
    | "Family"
    | "Spouse, partner"
    | "Children"
    | "Other_A"
    | "Other_B"
    | "Group of people";
  NONLIVINGAPARTMENTS_AVG?: number;
  NONLIVINGAPARTMENTS_MEDI?: number;
  NONLIVINGAPARTMENTS_MODE?: number;
  NONLIVINGAREA_AVG?: number;
  NONLIVINGAREA_MEDI?: number;
  NONLIVINGAREA_MODE?: number;
  OBS_30_CNT_SOCIAL_CIRCLE: number;
  OBS_60_CNT_SOCIAL_CIRCLE: number;
  OCCUPATION_TYPE?: string;
  ORGANIZATION_TYPE: string;
  OWN_CAR_AGE?: number;
  REGION_POPULATION_RELATIVE: number;
  REGION_RATING_CLIENT: number;
  REGION_RATING_CLIENT_W_CITY: number;
  REG_CITY_NOT_LIVE_CITY: number;
  REG_CITY_NOT_WORK_CITY: number;
  REG_REGION_NOT_LIVE_REGION: number;
  REG_REGION_NOT_WORK_REGION: number;
  SK_ID_CURR: number;
  TARGET?: number;
  TOTALAREA_MODE: number;
  WALLSMATERIAL_MODE: string;
  WEEKDAY_APPR_PROCESS_START:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  YEARS_BEGINEXPLUATATION_AVG: number;
  YEARS_BEGINEXPLUATATION_MEDI: number;
  YEARS_BEGINEXPLUATATION_MODE: number;
  YEARS_BUILD_AVG?: number;
  YEARS_BUILD_MEDI?: number;
  YEARS_BUILD_MODE?: number;
};
