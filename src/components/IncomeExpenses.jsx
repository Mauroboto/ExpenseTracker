import { useGlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <div>Income</div>
        <div> {income}</div>
      </div>
      <div className="flex justify-between my-2">
        <div>Expense</div>
        <div> {expenses}</div>
      </div>
    </>
  );
};

export default IncomeExpenses;
