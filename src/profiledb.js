const mongoose = require("mongoose");
async function main() {
  // mongoose.connect("mongod://localhost:27017/todolistDb", {
  //   useNewUrlParser: true,
  // });
  await mongoose.connect(
    "mongodb+srv://hw123me:Abd6298549@cluster0.jqvh0.mongodb.net/blogging?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true }
  );
  // mongoose.connect("mongodb://127.0.0.1:27017/myblog") for local Db
  console.log("profile connected");
}
main();
// const profileSchema = new mongoose.Schema({
//   username: String,
//   fullname: String,
//   email: String,
//   password: String,
//   type: String,
//   dp: String,
//   bio: String,
//   weblink: String,
//   facebook: String,
//   whatsapp: String,
//   twitter: String,
//   instagram: String,
//   phoneno: String,
// });

// const Profile = mongoose.model("profile", profileSchema);
// module.exports = Profile;
