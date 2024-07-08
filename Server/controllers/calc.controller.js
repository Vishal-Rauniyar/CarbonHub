const sustainModel = require("../models/sustainModel");
const calc = (req, res) => {
  const {
    tubelightNum,
    tubelightTime,
    fanNum,
    fanTime,
    acNum,
    acTime,
    refriNum,
    refriTime,
    geyserNum,
    geyserTime,
    washingMachineNum,
    washingMachineTime,
    microwaveNum,
    microwaveTime,
    petrol,
    diesel,
    organicWaste,
    LPG,
    trees,
  } = req.body;
  const totalPower =
    tubelightNum * tubelightTime * 0.02 +
    fanNum * fanTime * 0.075 +
    acNum * acTime * 1.65 +
    refriNum * refriTime * 0.2 +
    geyserNum * geyserTime * 1.16 +
    washingMachineNum * washingMachineTime * 0.7 +
    microwaveNum * microwaveTime * 1.2;

  const totalCarbon =
    petrol * 2.31 +
    diesel * 2.68 +
    organicWaste * 0.18 +
    LPG * 2.98 +
    totalPower * 0.82 * 7;

  const carbonOffset = trees * 30.77;
  const newSustain = new sustainModel({
    totalEmission: totalCarbon,
    totalOffset: carbonOffset,
    totalSustain: carbonOffset / totalCarbon,
  });
  newSustain.save();
  res.json({
    success: true,
    totalSustain: carbonOffset / totalCarbon,
    id: newEmission._id,
  });
};

module.exports = { calc };