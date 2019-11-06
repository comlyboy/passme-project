export interface ILoanManager {
  status: string;
  loan: number;
}

export interface ILoanRegister {
  bank_name: string;
  job_title: string;
  name: string;
  salary_earner: string;
  monthly_salary: number;
  email: string;
  address: string;
  account_number: number;
  date_of_birth: string;
  phone: number;
  bvn: number;
  office_address: string;
}

export interface ILoanRepay {
  payment_amount: number;
  loan: number;
}

export interface ILoanRequest {
  tenor_of_request: string;
  loan_amount: number;
}
