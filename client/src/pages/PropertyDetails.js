import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";

//import icons
import { ImSpinner2 } from "react-icons/im";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { HouseContext } from "../components/HouseContext";

const PropertyDetails = () => {
  const { loading, properties } = useContext(HouseContext)
  let { id } = useParams();
  id = Number(id)

  if (loading.properties) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  const property = properties.find(property => property.id === id) 
  const newLocal = "bg-green-500";

  return (
    <section className="bg-white">
      <Header />
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 flex gap-x-1 ">
            {/* <h2 className="text-2xl font-semibold">{property.type_id}</h2> */}
            <RiMapPinLine className="dropdown-icon-primary" />
            <h3 className="text-lg mb-4 font-semibold">{property.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {property.type.description}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {property.location.county}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-500">
            Ksh {property.price}
          </div>
        </div>
        <div className="flex flex-col item-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img
                src={property.image_url}
                alt=""
                className="rounded-tl-[90px] rounded-br-[90px] rounded-tr-[10px] rounded-bl-[10px] "
              />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{property.beds}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{property.baths}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{property.size}</div>
              </div>
            </div>
            <div>{property.description}</div>
          </div>
          <div className="flex-1 bg-white-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20">
                <img src={property.size} alt="" />
              </div>
              <div>
                {/* <div>{house.agent.name}</div> */}
                <Link to="" className="text-violet-700 text-sm">
                  View Seller Details
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4" onSubmit={(event) => event.preventDefault()}>
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message"
                defaultValue="Hello I am Interested in [Modern apartment]"
              ></textarea>
              <div className="flex gap-4 mt-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send Message
                </button>
                
                <a href="https://www.paypal.com/ke/home" target="_blank" className="border border-violet-700 text-violet-700 hover:border-violet-800 hover:text-violet-500 rounded p-4 text-sm w-full transition">
                  Make your Payment
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PropertyDetails;
