var MongoClient = require("mongodb").MongoClient;
// 创建数据库
// var url = "mongodb://localhost:27017/runoob";

// MongoClient.connect(url,(err,db) => {
//     if(err) throw err;
//     console.log('chuangjian ');
//     db.close;
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   console.log("数据库常见 ");
//   //
//   var dba = db.db("runoob");
//   dba.createCollection("sit", (err, res) => {
//     console.log("集合创建");
//     db.close();
//   });
// });
var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   console.log("数据库创建 ");
//   //
//   var dba = db.db("runoob");
//   var myobj = [
//     { name: "菜鸟工具", url: "https://c.runoob.com", type: "cn" },
//     { name: "Google", url: "https://www.google.com", type: "en" },
//     { name: "Facebook", url: "https://www.google.com", type: "en" }
//   ];
//   // 插入数据
//   dba.collection("site").insertMany(myobj, (err, res) => {
//     console.log("集合插入");
//     db.close();
//   });
// });

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库创建 ");
  //
  var dba = db.db("runoob");
  dba
    .collection("site")
    // .find({})
    .find({ type: "en" }) // 条件
    .toArray((err, res) => {
      console.log(res);
      db.close();
    });
});

// 其他怎删改查 参考菜鸟教程
// http://www.runoob.com/nodejs/nodejs-mongodb.html
