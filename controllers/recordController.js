const Record = require('../models/Records');
const createRecord = async (req, res) => {
try {

const { amount, type, category } = req.body;

if (!amount || !type || !category) {
return res.status(400).json({
message: "Please fill all required fields"
});
}

const record = await Record.create(req.body);

res.status(201).json(record);

} catch (error) {
res.status(500).json({ message: error.message });
}
};
const getRecords = async (req, res) => {
try {

const records = await Record.find();

res.json(records);

} catch (error) {
res.status(500).json({ message: error.message });
}
};
const updateRecord = async (req, res) => {
try {

const record = await Record.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);

res.json(record);

} catch (error) {
res.status(500).json({ message: error.message });
}
};
const deleteRecord = async (req, res) => {
try {

await Record.findByIdAndDelete(req.params.id);

res.json({ message: "Record deleted" });

} catch (error) {
res.status(500).json({ message: error.message });
}
};
module.exports = {
createRecord,
getRecords,
updateRecord,
deleteRecord
};