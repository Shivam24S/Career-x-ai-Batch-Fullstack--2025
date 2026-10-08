import Package from "../model/package.model.js";
import HttpError from "../middlewares/HttpError.js";

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

export default { add };
