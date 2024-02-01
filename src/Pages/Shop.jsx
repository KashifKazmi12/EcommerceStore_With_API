import React, { useEffect, useState } from 'react'
import { MainNavigation } from '../Component/MainNavigation'
import { Products } from '../Component/Products';
import { Link, useParams } from 'react-router-dom';
import {Footer} from '../Component/Footer'


export const Shop = () => {
  const [sortingList, setSortingList] = useState(false)
  const [checkboxes, setCheckboxes] = useState({
    color: { white: false, beige: false, blue: true, brown: false, green: false, purple: false },
    category: { 'new-arrivals': false, sale: false, travel: true, organization: false, accessories: false },
    size: { '2l': false, '6l': false, '12l': false, '18l': false, '20l': false, '40l': true },
  });

  const [categroies, setCategories] = useState([])
  let {id} = useParams();



  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))

  }, [id])

  const handleCheckBoxes = (type, checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [type]: {
        ...prevCheckboxes[type],
        [checkboxName]: !prevCheckboxes[type][checkboxName],
      },
    }));
  };
  return (
    <div>
      <MainNavigation className={'text-gray-800'} />
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <div>
                    <button onClick={() => { setSortingList(!sortingList) }} type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                      Sort
                      <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                  <div className={`${!sortingList ? 'hidden' : ''} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                      {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                      <Link to="/" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Most Popular</Link>
                      <Link to="/" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Best Rating</Link>
                      <Link to="/" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Newest</Link>
                      <Link to="/" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Price: Low to High</Link>
                      <Link to="/" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Price: High to Low</Link>
                    </div>
                  </div>
                </div>

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                  </svg>
                </button>
                <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                  <span className="sr-only">Filters</span>
                  <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-x-3 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <form className="hidden lg:block sticky top-0 col-span-1">
                  <h3 className="sr-only">Categories</h3>
                  <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    {/* --------------------------------- */}
                    {
                      categroies.map((category) => {
                        return (
                          <li key={category}>
                            <Link to={`/shop/${category}`}>{category}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                  {/* ... your existing categories ... */}
                  {Object.keys(checkboxes).map((type) => (
                    <div key={type} className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                          aria-controls={`filter-section-${type}`}
                          aria-expanded="false"
                        >
                          <span className="font-medium text-gray-900">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                          <span className="ml-6 flex items-center">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id={`filter-section-${type}`}>
                        <div className="space-y-4">
                          {Object.keys(checkboxes[type]).map((checkboxName) => (
                            <div key={checkboxName} className="flex items-center">
                              <input
                                id={`filter-${type}-${checkboxName}`}
                                name={`${type}[]`}
                                value={checkboxName}
                                type="checkbox"
                                checked={checkboxes[type][checkboxName]}
                                onChange={() => handleCheckBoxes(type, checkboxName)}
                                className="h-4 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${type}-${checkboxName}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {checkboxName.charAt(0).toUpperCase() + checkboxName.slice(1)}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </form>

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3">
                  {/* <!-- Products to be displayed --> */}
                  <Products category={id}/>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
