import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let folderName = "uploads/";

    if (file.fieldname === "eventPoster") {
      folderName += "eventPoster";
    } else if (file.fieldname === "eventBanners") {
      folderName += "eventBanners";
    } else if (file.fieldname === "eventSpeakers") {
      folderName += "eventSpeakers";
    } else if (file.fieldname === "eventImages") {
      folderName += "eventImages";
    } else if (file.fieldname === "eventDocuments") {
      folderName += "eventDocuments";
    } else {
      folderName = "others";
    }

    fs.mkdirSync(folderName, { recursive: true });

    cb(null, folderName);
  },
});

const fileFilter = (req, file, cb) => {
  const imagesTypes = ["image/jpg", "image/png", "image/jpeg"];

  const documentTypes = ["application/pdf"];

  if (file.fieldname === "eventDocuments") {
    if (documentTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb("only pdf format is allowed");
    }
  }

  if (imagesTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb("only jpg,png,jpeg image format is allowed");
  }
};

const uploads = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default uploads;
