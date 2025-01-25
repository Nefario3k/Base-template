export { };

declare global {
  interface TableDataArray {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    status: string;
    last_login: string | Date;
    payment: TableDataPayment,
    activity_logs: TableDataActivityLogs[]
  }
  interface TableDataPayment {
    status: string;
    amount: number;
    due_date: string | Date;
    currency: string
  }
  interface TableDataActivityLogs {
    date: string | Date;
    action: string;
    description: string;
  }
}
