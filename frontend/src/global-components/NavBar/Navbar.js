import { LinkButton } from "../LinkButton/Link-Button";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AppContext from "../../context";
import {useNavigate} from 'react-router-dom';

function NavBar() {
const navigate = useNavigate()
const {isAuth, setIsAuth, setUser} = useContext(AppContext);

function handleSignOut () {
    setIsAuth(false);
    setUser({});
    window.localStorage.clear();
    navigate('/', {replace: true})
};

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-1 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="http://localhost:3000" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic">
              Provident Life
            </span>
          </a>
          <div className="flex md:order-2">
            {!window.localStorage.getItem("token") && (
                <LinkButton pathName="/login" text="Log In" />
            )}
            {window.localStorage.getItem("token") && (
                <div className="px-6 pt-4 pb-2">
                <button onClick={handleSignOut} type="button" className="bg-black hover:bg-[#FF99A8] text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8]">
                  <Link to={'/'}>
                    Sign Out
                  </Link>
                </button>
              </div>
            )}
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/calculator"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a
                  href="faq"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQ
                </a>
              </li>
              <li>
              {window.localStorage.getItem("token") && (
                  <a
                  href="/chart"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Chart
                </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
