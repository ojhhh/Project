const multer = require("multer");
const path = require("path");

exports.postDecal = multer({
  storage: multer.diskStorage({
    destination: (req, file, fin) => {
      fin(null, "img/decals");
    },

    filename: (req, file, fin) => {
      const ext = path.extname(file.originalname);

      const filename =
        path.basename(file.originalname, ext) + "_" + Date.now() + ext;

      fin(null, filename);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});


