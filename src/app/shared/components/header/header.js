import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () => (
  <header>
      <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <NavLink className="navbar-brand" to="/">Invoice App</NavLink>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                      <li><NavLink to="products">Products</NavLink></li>
                      <li><NavLink to="customers">Customers</NavLink></li>
                      <li><NavLink to="admin">Invoices</NavLink></li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
);