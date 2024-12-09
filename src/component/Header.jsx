import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" border-b-2">
      <div className="navbar bg-base-100 w-11/12 mx-auto py-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">Apu Roy</a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal text-xl px-1 lg:mr-24">
            <li className="lg:mr-6">
              <Link>Blog</Link>
            </li>
            <li>
              <details>
                <summary>Contacts</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Header;
