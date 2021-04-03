const User = require("../models/user");
const express = require("express");
const ErrorHandler = require("../utils/errorhandler");

const catchAsyncError = require("../middlewares/catchAsyncError");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatars/kccvibsuiusmwfepb3m.png",
      url:
        "http://res.cloudinary.com/shopit/imgae/upload/v1606305757/avatars/kccvibsuiusmwfepb3m.png",
    },
  });
  const token = user.getJwtToken();
  res.status(201).json({
    success: true,
    user,
    token,
  });
});

//Login user => /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  //Finding user in DB
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  //check if password is correct or not
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  const token = user.getJwtToken();
  res.status(200).json({
    success: true,
    token,
  });
});
