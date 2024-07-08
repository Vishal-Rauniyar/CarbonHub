const profileModel = require("../models/profileModel.js");
const ngoProfileModel = require("../models/ngoProfileModel.js");
const profileController = async (req, res,next) => {
  try {
    const {
      firstName,
      lastName,
      genderIn,
      phoneNumber,
      dob,
      country,
      education,
      city,
    } = req.body;
    const profile = new profileModel({
      firstName: firstName,
      lastName: lastName,
      gender: genderIn,
      phoneNumber: phoneNumber,
      dob: dob,
      country: country,
      education: education,
      city: city,
    });
    await profile.save();
    res.json({
      success: true,
      message: "Profile Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const ngoProfileController = async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      country,
      city,
      website,
      description,
    } = req.body;
    const profile = new ngoProfileModel({
      name: name,
      phoneNumber: phoneNumber,
      country: country,
      city: city,
      website: website,
      description: description,
    });
    await profile.save();
    res.json({
      success: true,
      message: "Profile Created Successfully",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {profileController,ngoProfileController};