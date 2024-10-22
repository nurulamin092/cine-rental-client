import Logo from "./assets/logo.svg";
import RingImg from "./assets/ring.svg";
import SumImg from "./assets/icons/sun.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
const Headers = () => {
  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={RingImg} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={SumImg} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Headers;
