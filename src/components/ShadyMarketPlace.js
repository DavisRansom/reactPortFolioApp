import React from "react";
import shadyMarketPlacePic from "./shadyMarketplace.png";

function ShadyMarketPlace() {
  return (
    <figure>
      <figcaption>
      <a href="https://e-commerce-store-w-stripe-2022.herokuapp.com/">
        <img src={shadyMarketPlacePic} alt="The Shady Marketplace" />
      </a>
        
        The Shady Marketplace is a complete, working E-commerce site. Administrators can login to add or remove products. Users can login and buy items they find in the store or sell in the store themselves. The store uses Stripe to process
        payments.
      </figcaption>
    </figure>
  );
}

export default ShadyMarketPlace;

