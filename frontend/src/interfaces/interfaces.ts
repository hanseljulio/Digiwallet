export interface ITableData {
  amount: number;
  created_at: string;
  description: string;
  id: number;
  source_of_fund_id: number;
  to_user: IToUserData;
  to_wallet_id: number;
  updated_at: number;
  wallet_id: number;
}

export interface IToUserData {
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
  updated_at: string;
  wallet_id: number;
}
