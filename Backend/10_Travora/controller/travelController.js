import Package from "../model/package.model.js";
import HttpError from "../middlewares/HttpError.js";
import cloudinary from "../config/cloudinary.js";

const add = async (req, res, next) => {
  try {
    const { packageName, destination, description, duration, price } = req.body;

    const package_image = req.file?.path || null;
    const cloudinary_id = req.file?.filename || null;
    const newPackage = await Package.create({
      packageName,
      destination,
      description,
      duration,
      price,
      package_image,
      cloudinary_id,
    });

    await newPackage.save();

    return res.status(200).json({
      success: true,
      message: "package added successfully",
      newPackage,
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

const getAll = async (req, res, next) => {
  try {
    const getAllPackage = await Package.find();

    if (getAllPackage.length === 0) {
      return next(new HttpError("No Data Found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Data Found Successfully",
      total: getAllPackage.length,
      getAllPackage,
    });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const getPackage = await Package.findById(id);

    if (!getPackage) {
      return next(new HttpError("No Data Found", 404));
    }

    res
      .status(200)
      .json({ success: true, message: "Data Found Successfully", getPackage });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

const DeletePackage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const DeletePackage = await Package.findById(id);

    if (!DeletePackage) {
      return next(new HttpError("package not found", 404));
    }

    await cloudinary.uploader.destroy(DeletePackage.cloudinary_id);

    await DeletePackage.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Data deleted Successfully" });
  } catch (error) {
    return next(new HttpError(error.message));
  }
};

export default { add, getAll, getById, DeletePackage };
