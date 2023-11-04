import { useGlobalState } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="flex justify between">
      <h1>Balance</h1>
      <div className="text-xxl font-bold">$ {total} </div>
    </div>
  );
}
