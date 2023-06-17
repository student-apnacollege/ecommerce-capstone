import {
  MdShoppingCartCheckout,
  MdOutlineAddShoppingCart,
  MdManageAccounts,
  MdSearch,
} from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="navLogo">
        <MdShoppingCartCheckout />
        <h3>ShopCart</h3>
      </div>
      <div id="navLinks">
        <ul>
          <li>
            <select id="categoryDropdown">
              <option>Categories</option>
            </select>
          </li>
          <li>
            <p>Deals</p>
          </li>
          <li>
            <p>What's New</p>
          </li>
          <li>
            <p>Deliver</p>
          </li>
        </ul>
      </div>
      <div id="navSearch">
        <input type="text" placeholder="Type a product name" />
        <MdSearch />
      </div>
      <div id="navAuth">
        <div>
          <MdManageAccounts />
          <p>Account</p>
        </div>
        <div>
          <MdOutlineAddShoppingCart />
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
