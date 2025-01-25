import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const menu = [
    { name: "خانه", url: "/" },
    { name: "سفارش ساخت", url: "/plans" },
    { name: "پشتیبانی", url: "/contact" },
    { name: "قوانین", url: "/rules" },
    { name: "آموزش ها", url: "/courses" },
    { name: "وبلاگ", url: "/posts" },
  ];

  // states declaration
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);

  const pathname = usePathname();
  const asPath = pathname;

  // sticky header
  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);
      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    });
  }, []);

  return (
    <>
      <div className="header-height-fix"></div>
      <header
        className={`header ${sticky && "header-sticky"} ${
          direction === 1 && "unpinned"
        }`}
        ref={headerRef}
      >
        <nav className="navbar container-xl">
          {/* لوگو به صورت متن */}
          <div className="order-0">
            <div className="ml-5 text-2xl font-bold text-orange-500">MyTradeBot</div>
          </div>

          {/* منو */}
          <ul
            id="nav-menu"
            className={`navbar-nav order-2 w-full justify-center lg:order-1 md:w-auto md:space-x-2 lg:flex ${
              !showMenu && "hidden"
            }`}
          >
            {menu.map((item, i) => (
              <li className="nav-item" key={`menu-${i}`}>
                <Link
                  href={item.url}
                  className={`nav-link block ${
                    asPath === item.url && "active"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="order-1 ml-auto flex items-center md:ml-0">
            {/* دکمه‌ها */}
            <Link className="mr-2 btn btn-primary hidden lg:flex" href="/plans">
              سفارش ساخت
            </Link>
            

            {/* navbar toggler */}
            {showMenu ? (
              <button
                className="h-8 w-8 text-3xl text-dark lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <CgClose />
              </button>
            ) : (
              <button
                className="text-dark lg:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  <path
                    fill="currentColor"
                    d="M 5 5 L 5 11 L 11 11 L 11 5 L 5 5 z M 13 5 L 13 11 L 19 11 L 19 5 L 13 5 z M 21 5 L 21 11 L 27 11 L 27 5 L 21 5 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 15 7 L 17 7 L 17 9 L 15 9 L 15 7 z M 23 7 L 25 7 L 25 9 L 23 9 L 23 7 z M 5 13 L 5 19 L 11 19 L 11 13 L 5 13 z M 13 13 L 13 19 L 19 19 L 19 13 L 13 13 z M 21 13 L 21 19 L 27 19 L 27 13 L 21 13 z M 7 15 L 9 15 L 9 17 L 7 17 L 7 15 z M 15 15 L 17 15 L 17 17 L 15 17 L 15 15 z M 23 15 L 25 15 L 25 17 L 23 17 L 23 15 z M 5 21 L 5 27 L 11 27 L 11 21 L 5 21 z M 13 21 L 13 27 L 19 27 L 19 21 L 13 21 z M 21 21 L 21 27 L 27 27 L 27 21 L 21 21 z M 7 23 L 9 23 L 9 25 L 7 25 L 7 23 z M 15 23 L 17 23 L 17 25 L 15 25 L 15 23 z"
                  />
                </svg>
              </button>
            )}
            {/* /navbar toggler */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
