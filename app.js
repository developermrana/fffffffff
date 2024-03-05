/*const friends = ["rahim", "Karim", "josim", "jodu", "modu"];

const newFriendsName = friends.map((friend) => "Md. " + friend);

const findName = friends.find((name) => name === "jodu");
console.log("md" + findName);
*/
// async function fetchProducts() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   console.log(data);
// }
// fetchProducts();

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => products(data));

const products = (allProducts) => {
  const container = document.getElementById("container");

  allProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");

    const { title, price, image, description, category } = product;

    div.innerHTML = `
   <div>
   <img src ="${image}" />
   <p>cap :  ${category}</p>
   <h1>${title}</h1>
   <p>${description}</p>
   <h2>${price}</h2>
   </div>
    `;
    container.appendChild(div);
  });
};
//-----------------------

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person2 = {
//   firstName: "Shmim",
//   lastName: "Islam",
// };
// const person3 = {
//   firstName: "mim",
//   lastName: "Islam",
// };

// // This will return "John Doe":
// const output = person.fullName.call(person2);
// const output1 = person.fullName.call(person3);

// console.log(output);

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.apply(person1, ["manikganj sador", "country"]);
person.fullName.call(person1, "manikganj sador", "country");

Math.max.apply("", [1, 2, 3]);

console.log(window);
