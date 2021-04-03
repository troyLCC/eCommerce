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
  res.status(201).json({
    success: true,
    user,
  });
});
