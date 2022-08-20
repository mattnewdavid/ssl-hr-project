import React from "react";
import Card from "./Card";
import humimg from "../images/card-img.png";
import payimg from "../images/card-img-2.png";
import levimg from "../images/card-img-3.png";

const card_data = [
  {
    title: "Human Resource Module",
    price: "40,000",
    details: "Manage your resource in one place with ease and do much more..",
    tag: "Human Resources",
    image: humimg,
  },
  {
    title: "Payroll Module",
    price: "60,000",
    details:
      "Manage your payroll and salary payment in one place with ease and do much more..",
    tag: "Payroll",
    image: payimg,
  },
  {
    title: "Leave Management Module",
    price: "30,000",
    details:
      "Manage your human resource in one place with ease and do much more..",
    tag: "Leave Management",
    image: levimg,
  }
];

export default function Main() {
  return (
    <div className="main-container">
      <div className="header">
        <h3>Billing & Accounts</h3>
        <div>
          {card_data.map((card) => {
            return (
              <Card
                title={card.title}
                price={card.price}
                details={card.details}
                tag={card.tag}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
