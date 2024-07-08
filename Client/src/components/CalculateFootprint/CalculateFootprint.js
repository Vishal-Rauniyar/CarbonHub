import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CalculateFootprint.css";

function CalculateFootprint() {
  const [formData, setFormData] = useState({
    totalTubelight: 0,
    tubelightTime: 0,
    totalFan: 0,
    fanTime: 0,
    totalAC: 0,
    acTime: 0,
    totalRefrigerator: 0,
    refrigeratorTime: 0,
    totalGeyser: 0,
    geyserTime: 0,
    totalWashingMachine: 0,
    washingMachineTime: 0,
    totalMicrowave: 0,
    microwaveTime: 0,
    petrol: 0,
    diesel: 0,
    lpg: 0,
    organicWaste: 0,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    const totalPower =
      formData.totalTubelight * formData.tubelightTime * 0.02 +
      formData.totalFan * formData.fanTime * 0.075 +
      formData.totalAC * formData.acTime * 1.65 +
      formData.totalRefrigerator * formData.refrigeratorTime * 0.2 +
      formData.totalGeyser * formData.geyserTime * 1.16 +
      formData.totalWashingMachine * formData.washingMachineTime * 0.7 +
      formData.totalMicrowave * formData.microwaveTime * 1.2;
    document.getElementById("totalPower").value = totalPower;
    const totalCarbon =
      formData.petrol * 2.31 +
      formData.diesel * 2.68 +
      formData.organicWaste * 0.18 +
      formData.lpg * 2.98 +
      totalPower * 0.82 * 7;
    document.getElementById("totalCarbon").value = totalCarbon;
  });
  return (
    <div>
      <Header />
      <div className="eclipse1Calculate"></div>

      <div className="Service1">
        <h1 className="heading1">Calculate Your Footprints</h1>
        <div className="title">Total Power :</div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Tubelight"
            id="totalTubelight"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Tubelight Time"
            id="tubelightTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.02</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Fan"
            id="totalFan"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Fan Time"
            id="fanTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.075</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total AC"
            id="totalAC"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="AC Time"
            id="acTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.65</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Refrigerator"
            id="totalRefrigerator"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Refrigerator Time"
            id="refrigeratorTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.20</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Geyser"
            id="totalGeyser"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Geyser Time"
            id="geyserTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.16</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Total Washing Machine"
            id="totalWashingMachine"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Washing Machine Time"
            id="washingMachineTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.70</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Total Microwave"
            id="totalMicrowave"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <input
            className="input-box"
            placeholder="Microwave Time"
            id="microwaveTime"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">1.2</span>
          <span className="operator">=</span>
          <input
            className="result-box"
            placeholder="Total Power Consumption from Electric Appliances"
            id="totalPower"
            value="0"
          />
        </div>

        <div className="title2">Total Carbon Emission :</div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="Petrol"
            id="petrol"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.31</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Diesel"
            id="diesel"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.68</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input
            className="input-box"
            placeholder="LPG"
            id="lpg"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">2.98</span>
          <span className="operator">+</span>
          <input
            className="input-box"
            placeholder="Organic Waste"
            id="organicWaste"
            onChange={handleChange}
          />
          <span className="operator">×</span>
          <span className="constant">0.18</span>
          <span className="operator">+</span>
        </div>
        <div className="input-group">
          <input className="input-box" placeholder="Total Power" />
          <span className="operator">×</span>
          <span className="constant">0.82</span>
          <span className="operator">×</span>
          <span className="constant">7</span>
          <span className="operator">=</span>
          <input
            className="result-box2"
            placeholder="Emission of Carbon"
            id="totalCarbon"
            value="0"
          />
        </div>
      </div>

      <div className="eclipse2Calculate"></div>

      <Footer />
    </div>
  );
}


export default CalculateFootprint;