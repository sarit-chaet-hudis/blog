const res = require("express/lib/response");
const { MongoClient } = require("mongodb");
const uri = require("./serverpath");
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

  const result = await db.collection("posts").insertOne({
    title: "How I met your father",
    author: "61e696c83d31ac332cf8e7ed",
    content: "lorem ipsum dolermo sit yanis",
    comments: [
      { text: "please expand", author: "61e69c9a86d348087d0ca446" },
      { text: "thank you!", author: "61e696c83d31ac332cf8e7ed" },
    ],
  });
  console.log(`A post was added with _id ${result.insertedId}`);
  console.log(`at ${result.insertedId.getTimestamp()}`);

  client.close();
});
