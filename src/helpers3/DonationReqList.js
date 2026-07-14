import React from 'react';
import Blood from "../assests/blood.jpg";
import Clothes from "../assests/clothes.jpg";
import Toys from "../assests/toys.png";
import Food from "../assests/food.png";
import Medical from "../assests/medical.png";
import School from "../assests/school.png";


export const donRequests = [
        {
      name: "Blood",
      image: Blood,
      category: "Blood Donation",
      linkTo: "/blooddetails"
    },
    {
        name: "Blood AB+",
        image: Blood,
        category: "Blood Donation",
        linkTo: "/blooddetails"
    },
    {
      name: "Blood A-",
      image: Blood,
      category: "Blood Donation",
      linkTo: "/blooddetails"
  },
    {
      name: "Book",
      image: School,
      category: "School Supplies",
      linkTo: "/bookdetails"
  },
  {
      name: "Book",
      image: School,
      category: "School Supplies",
      linkTo: "/bookdetails"
  },
  {
    name: "Shirtt",
    image: Clothes,
    category: "Clothes",
    linkTo: "/femclothesdetails",
  },
  {
    name: "Shirtt",
    image: Clothes,
    category: "Clothes",
    linkTo: "/femclothesdetails",
  },
  {
    name: "Shoes",
    image: Clothes,
    category: "Clothes",
    linkTo: "/femclothesdetails",
  },
  {
    name: "Jeans",
    image: Clothes,
    category: "Clothes",
    linkTo: "/clothesdetailsmale",
  },
  {
    name: "Jacket",
    image: Clothes,
    category: "Clothes",
    linkTo: "/clothesdetailsmale",
  },
  {
    name: "Beans",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodcanneddetails"
  },
  {
    name: "Cucumber",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodvegetablesdetails"
  },
  {
    name: "Croissant",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodbakeddetails"
  },
  {
    name: "Ceasar Salad",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodfreshdetails"
  },
  {
    name: "Greek Salad",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodfreshdetails"
  },
  {
    name: "Mango",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodfruitdetails"
  },
  {
    name: "Bell Pepper",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodvegetablesdetails"
  },
  {
    name: "Tuna",
    image: Food,
    category: "Food and Groceries",
    linkTo: "/foodcanneddetails"
  },
  {
    name: "Syringes",
    image: Medical,
    category: "Medical Supplies",
    linkTo: "/medicaldetails"
  },
  {
    name: "Medicines",
    image: Medical,
    category: "Medical Supplies",
    linkTo: "/medicaldetails"
  },
  {
    name: "Pencil",
    image: School,
    category: "School Supplies",
    linkTo: "/stationarydetails"
  },
  {
    name: "Pen",
    image: School,
    category: "School Supplies",
    linkTo: "/stationarydetails"
  },
  {
    name: "Notebook",
    image: School,
    category: "School Supplies",
    linkTo: "/stationarydetails"
  },
  {
    name: "Highlighter",
    image: School,
    category: "School Supplies",
    linkTo: "/stationarydetails"
  },
  {
    name: "Doll",
    image: Toys,
    category: "Toys",
    linkTo: "/toysdetails"
  },
  {
      name: "Car",
      image: Toys,
      category: "Toys",
      linkTo: "/toysdetails"
   },
   {image:Medical,  name: "paracetamol", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        { image:Medical, name: "buscopan", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        {image:Medical,  name: "wheel chair", category: "Medical Supplies", linkTo:"/Boardmdetails" },
        { image:Medical, name: "bed", category: "Medical Supplies", linkTo:"/Boardmdetails" }
   
];