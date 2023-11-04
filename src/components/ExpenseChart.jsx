import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
  const totalExpensesPercentage = Math.round(
    (totalExpense / totalIncome) * 100
  );
  const totalIncomePrecentage = 100 - totalExpensesPercentage;
  return (
    <VictoryPie
      colorScale={["#2ecc71", "#e74613"]}
      data={[
        { x: "", y: totalIncomePrecentage },
        { x: "", y: totalExpensesPercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
};

export default ExpenseChart;
