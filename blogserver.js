const res = require("express/lib/response");
const { MongoClient } = require("mongodb");
const uri = require("./serverpath");
// const uri =
//   "mongodb+srv://saritchh:q1w2e3r4@cluster0.9o36c.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  if (err) {
    return console.log("Unable to conect to database");
  }

  const db = client.db();

  const result = await db.collection("users").insertOne({
    name: "Tamar CY",
    email: "tamarcy@gmail.com",
    avatar: "thispersondoesnotexist.com/image.jpg",
  });
  console.log(`A user was added with _id ${result.insertedId}`);

  client.close();
});