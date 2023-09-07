const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");

const { USER, POST, COMMENTS, RECOMMENTS } = require("../models");

exports.postImg = multer({
  storage: multer.diskStorage({
    destination: (req, file, fin) => {
      fin(null, "img/");
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

// exports.imgUpdate = async (req, res) => {
//   const { file, acc_decoded } = req;
//   const { nickName, upload } = req.body;
//   // console.log(req);
//   console.log("업로듕", upload);
//   try {
//     if (file) {
//       console.log("파일 있졍", file);
//       await USER.update(
//         {
//           profile_img: "img/" + file.filename,
//         },
//         { where: { user_id: acc_decoded.user_id } }
//       );
//     } else {
//       // console.log("뭔디", acc_decoded.profile_img);
//       await USER.update(
//         { profile_img: upload },
//         { where: { user_id: acc_decoded.user_id } }
//       );
//     }
//     await USER.findOne({
//       raw: true,
//       where: { user_id: acc_decoded.user_id },
//     }).then((e) => {
//       res.send({ login: e });
//     });
//   } catch (error) {
//     console.log("업로드 에러", error);
//   }
// };

exports.imgUpdate = async (req, res) => {
  const { file, acc_decoded } = req;
  const { upload } = req.body;

  try {
    let updatedProfileImg;

    if (file) {
      updatedProfileImg = "img/" + file.filename;
    } else if (upload) {
      updatedProfileImg = upload;
    } else {
      return res.status(400).send("No valid image or upload provided");
    }

    await USER.update(
      { profile_img: updatedProfileImg },
      { where: { user_id: acc_decoded.user_id } }
    );

    const updatedUser = await USER.findOne({
      raw: true,
      where: { user_id: acc_decoded.user_id },
    });

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send({ login: updatedUser });
  } catch (error) {
    console.log("업로드 에러", error);
    res.status(500).send("An error occurred");
  }
};
exports.mypage = async (req, res) => {
  try {
    // console.log(req);
    const { acc_decoded } = req;
    // console.log("123123123", acc_decoded);
    if (acc_decoded) {
      await USER.findOne({
        raw: true,
        where: { user_id: acc_decoded.user_id },
      }).then((e) => {
        res.send(e);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateuserpw = async (req, res) => {
  try {
    const { acc_decoded } = req;
    // console.log(req.body);
    const { pw } = req.body;
    // console.log("123123123", acc_decoded);
    const hash = bcrypt.hashSync(pw, 10);

    if (acc_decoded) {
      await USER.update(
        { user_pw: hash }, // Update the password field with the hashed value
        {
          where: { user_id: acc_decoded.user_id },
        }
      ).then(() => {
        res.status(200);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateusernick = async (req, res) => {
  try {
    // console.log(req.body);
    const { acc_decoded } = req;
    // console.log("123123123", acc_decoded);

    const { nick } = req.body;

    if (acc_decoded) {
      await USER.update(
        { Nick: nick }, // Update the password field with the hashed value
        {
          where: { user_id: acc_decoded.user_id },
        }
      ).then(() => {
        res.status(200).json({ data: nick });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getmypostsIliked = async (req, res) => {
  const { acc_decoded } = req;
  console.log("getmypostsIliked", acc_decoded);
  try {
    // const post = await POST.findOne({
    //   where: { id },
    //   include: [{ model: COMMENTS, include: [{ model: RECOMMENTS }] }],
    // });
    // // console.log("post :", post);
    // res.json(post);
    // console.log("getmypostsIliked", acc_decoded);
    res.status(200).json({ value: "성공" });
  } catch (error) {
    console.log(error);
  }
};
exports.postWrittenbyme = async (req, res) => {
  try {
    const { acc_decoded } = req;
    console.log("postWrittenbyme", acc_decoded);
    const user_id = acc_decoded.id;
    const posts = await POST.findAll({
      where: { callbyuser_id: user_id },
      include: [{ model: USER }],
      // include: [{ model: COMMENTS, include: [{ model: RECOMMENTS }] }],
    });

    console.log("post :", posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};
