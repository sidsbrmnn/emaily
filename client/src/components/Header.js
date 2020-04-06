import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  state = {
    expand: false,
    expandProfile: false,
  };

  toggleNav = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  toggleProfile = () => {
    const { expandProfile } = this.state;
    this.setState({ expandProfile: !expandProfile });
  };

  renderNav() {
    const navs = [{ path: "/surveys", name: "Surveys" }];

    return navs.map((nav) => (
      <NavLink
        key={nav.path}
        to={nav.path}
        className={
          "block md:ml-4 mt-1 md:mt-0 px-3 py-2 rounded-md text-base md:text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        }
        activeClassName="text-white bg-gray-900 hover:bg-gray-900"
      >
        {nav.name}
      </NavLink>
    ));
  }

  renderNotificationBtn() {
    return (
      <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
    );
  }

  renderProfileBtn() {
    const { expandProfile } = this.state;

    return (
      <>
        <button
          onClick={this.toggleProfile}
          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
        >
          <img
            className="h-8 w-8 rounded-full"
            src={this.props.auth ? this.props.auth.photo : ""}
            alt=""
          />
        </button>
        {expandProfile ? (
          <CSSTransition
            in={expandProfile}
            timeout={100}
            classNames={{
              enter: "transition ease-out duration-100",
              enterActive: "transform opacity-0 scale-95",
              enterDone: "transform opacity-100 scale-100",
              exit: "transition ease-in duration-75",
              exitActive: "transform opacity-100 scale-100",
              exitDone: "transform opacity-0 scale-95",
            }}
          >
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div className="py-1 rounded-md bg-white shadow-xs">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Your Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Settings
                </Link>
                <a
                  href="/api/logout"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Sign out
                </a>
              </div>
            </div>
          </CSSTransition>
        ) : null}
      </>
    );
  }

  render() {
    const { expand } = this.state;

    return (
      <header className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={this.toggleNav}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={expand ? "hidden" : "inline-flex"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={expand ? "inline-flex" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/img/logos/workflow-mark-on-dark.svg"
                  alt=""
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/img/logos/workflow-logo-on-dark.svg"
                  alt=""
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex -ml-4">{this.renderNav()}</div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative">{this.renderNotificationBtn()}</div>
              <div className="ml-3 relative">{this.renderProfileBtn()}</div>
            </div>
          </div>
        </div>
        <div className={(expand ? "block" : "hidden") + " sm:hidden"}>
          <div className="px-2 pt-2 pb-3 -mt-1">{this.renderNav()}</div>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
