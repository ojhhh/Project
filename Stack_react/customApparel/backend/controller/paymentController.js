const axios = require("axios");
const path = require("path");
const { USER } = require("../models");
const { PAYMENTVIEW } = require("../models");

let count = 0;
let specificValue = null;
const payments = async () => {
  const imp_key = process.env.imp_key;
  const imp_secret = process.env.imp_secret;
  console.log("imp_key", imp_key);
  console.log("imp_secret", imp_secret);
  console.log("payment");
  const url = "https://api.iamport.kr/users/getToken";

  const formData = new FormData();
  formData.append("imp_key", imp_key);
  formData.append("imp_secret", imp_secret);
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

exports.payment = async (req, res, next) => {
  console.log("여기 접근함");
  specificValue = await payments();
  count++;

  req.specificValue = specificValue;

  next();
};

exports.paymentcancel = async (req, res) => {
  console.log("paymentcancel 여기까지오냥?");
  console.log("paymentcancel", req.body);
  console.log("paymentcancel", req.specificValue.response.access_token);
  let token = req.specificValue.response.access_token;
  const formdata = new FormData();
  formdata.append("merchant_uid", req.body.value);
  try {
    const url = `https://api.iamport.kr/payments/cancel?_token=${token}`;
    const response = await axios.post(url, formdata, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8",
      },
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
exports.paymentdetail = async (req, res) => {
  try {
    const { acc_decoded } = req;
    const response = await PAYMENTVIEW.findOne({
      where: { user_id: acc_decoded.user_id },
    });
    console.log(response);
    res.status(200).json(response);
    return response.data;
  } catch (error) {
    console.log("paymentdetails 에러");
    console.log(error);
  }
};

exports.paymenthistorydetails = async (req, res) => {
  console.log("Paymenthistorydetails", req.specificValue.response.access_token);
  console.log("Paymenthistorydetails,", req.body.array);
  let token = req.specificValue.response.access_token;
  const history = [];
  for (let index = 0; index < req.body.array.length; index++) {
    let imp_uid = req.body.array[index].trim();
    const url = `https://api.iamport.kr/payments/find/${imp_uid}/?sorting=-started&_token=${token}`;
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      console.log("Paymenthistorydetails", response.data);
      history.push(response.data);
    } catch (error) {
      console.log("paymentdetails 에러");
      console.log(error);
    }
  }
  res.status(200).json(history);

  // // const url = `https://api.iamport.kr/payments/${imp_uid}?_token=${token}`;

  // try {
  //   const response = await axios.get(url, {
  //     withCredentials: true,
  //   });
  //   console.log("Paymenthistorydetails", response.data);
  //   res.status(200).json(response.data);
  // } catch (error) {
  //   console.log("paymentdetails 에러");
  //   console.log(error);
  // }
};

exports.paymentsucceeded = async (req, res) => {
  console.log("paymentsucceeded", req.body);
  const { acc_decoded } = req;
  const { Unique_payment_number } = req.body;
  console.log("paymentsucceeded", acc_decoded);
  console.log("Unique_payment_number", Unique_payment_number);

  try {
    const judge = await PAYMENTVIEW.findOne({
      where: { user_id: acc_decoded.user_id },
    });
    console.log("judge", judge);
    if (judge) {
      const updatedUniquePaymentNumber = `${judge.Unique_payment_number}, ${Unique_payment_number}`;

      await PAYMENTVIEW.update(
        {
          Unique_payment_number: updatedUniquePaymentNumber,
        },
        { where: { user_id: acc_decoded.user_id } }
      );
    } else {
      await PAYMENTVIEW.create({
        user_id: acc_decoded.user_id,
        Unique_payment_number: Unique_payment_number,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.payments = payments;
