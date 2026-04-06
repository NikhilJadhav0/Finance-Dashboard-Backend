const Record = require('../models/Records');
const getSummary = async (req, res) => {
try {

const income = await Record.aggregate([
{ $match: { type: "income" } },
{ $group: { _id: null, total: { $sum: "$amount" } } }
]);

const expense = await Record.aggregate([
{ $match: { type: "expense" } },
{ $group: { _id: null, total: { $sum: "$amount" } } }
]);

res.json({
totalIncome: income[0]?.total || 0,
totalExpense: expense[0]?.total || 0,
netBalance: (income[0]?.total || 0) - (expense[0]?.total || 0)
});
} catch (error) {
res.status(500).json({ message: error.message });
}
};
const categorySummary = async (req, res) => {
try {

const data = await Record.aggregate([
{
$group: {
_id: "$category",
total: { $sum: "$amount" }
}
}
]);

res.json(data);

} catch (error) {
res.status(500).json({ message: error.message });
}
};
const monthlySummary = async (req, res) => {
try {

const data = await Record.aggregate([
{
$group: {
_id: { $month: "$date" },
total: { $sum: "$amount" }
}
}
]);

res.json(data);

} catch (error) {
res.status(500).json({ message: error.message });
}
};
module.exports = {
getSummary,
categorySummary,
monthlySummary
};