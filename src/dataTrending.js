// import $ from "jquery";

const width = 400;
const index = 0;

const data = {
  index: index,
  URLthumbnail: `https://picsum.photos/${width}/${width / 2}?random=${index}`,
  title: `${generateRandomString(15)}`,
  article: `${generateRandomString(45)}`,
  timePassed: `${Math.floor(Math.random() * 10000)}`,
  countComments: `${Math.floor(Math.random() * 10000)}`,
  URLimageProfile: "",
  author: `${generateRandomString(3)}`,
  countLikes: `${Math.floor(Math.random() * 10000)}`,
};
const datas = [];

// $.ajax({
//   url: "https://randomuser.me/api/",
//   dataType: "json",
//   success: function (data) {
//     console.log(data);
//   },
// });

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const lengthString = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * lengthString));
  }

  return result;
}

// Example usage:
// console.log(generateRandomString(10)); // Generates a random string of length 10
// console.log(Math.floor(0));
// console.log(Math.ceil(0));
