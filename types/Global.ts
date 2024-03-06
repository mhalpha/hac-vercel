export interface formList {
  heartAttack?: boolean | null;
  sex?: string | null;
  age?: number | null;
  smoke: boolean | null;
  height: number | null;
  weight: number | null;
  heartDisease: boolean | null;
  diabetes: boolean | null;
  bloodPressureMeditation: boolean | null;
  bloodPressureLevel: boolean | null;
  systolicBloodPressureLevel: number | null;
  diastolicBloodPressure: number | null;
  cholesterolLevel: boolean | null;
  TotalCholesterolLevel: number | null;
  HBLCholesterolLevel: number | null;
  postalCode: number | null;
  wantReport: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  privacyAcceptance?: boolean | null;
}
export interface TabProps {
  formKey: string;
  formRef: any;
  steps?: React.MutableRefObject<number>;
}
export interface LookupTables {
  age: Record<string, number>;
  smoke: Record<string, number>;
  history: Record<string, number>;
  diabetes: Record<string, number>;
  med: Record<string, number>;
  cholesterol: Record<string, number>;
  cholesterolAvg: Record<string, number>;
  hdl: Record<string, number>;
  hdlAvg: Record<string, number>;
  sbp: Record<string, number>;
  sbpAvg: Record<string, number>;
  final: Record<string, number>;
}
export interface MatchingScores {
  age: number;
  smoke: number;
  history: number;
  diabetes: number;
  med: number;
  sbp: number;
  dbp: number;
  totalCholesterol: number;
  hdl: number;
  final: number;
}
