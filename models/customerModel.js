const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default: "Indonesia",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

const customerTest = new Customer({
  name: "Hafied2z",
  email: "testing112@gmail.com",
  phoneNumber: 12223344,
});

// customerTest
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(`Data Gagal Disimpan`);
//     console.log(err);
//   });
