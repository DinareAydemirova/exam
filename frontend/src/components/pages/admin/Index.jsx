import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Admin = () => {
  const [data, setdata] = useState([]);
  const [sort, setsort] = useState("");

  useEffect(() => {
    axios.get("/flowers").then((res) => {
      setdata(res.data);
    });
  }, []);

  const deleteProd = async (id) => {
    await axios.delete(`flowers/${id}`);
    setdata(data.filter((elem) => elem._id !== id));
  };

  if (sort == "a-z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort == "z-a") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort == "high-low") {
    data.sort((a, b) => b.price - a.price);
  } else if (sort == "low-high") {
    data.sort((a, b) => a.price - b.price);
  }

  const handleSort = (type) => {
    setsort(type);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Produsts</h1>
        </div>
        <div className="p-4 flex">
          <Link to="/post" className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              add product
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="p-4 flex">
            <button
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              onClick={() => handleSort("a-z")}
            >
              a-z
            </button>
          </div>
          <div className="p-4 flex">
            <button
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              onClick={() => handleSort("z-a")}
            >
              z-a
            </button>
          </div>
          <div className="p-4 flex">
            <button
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              onClick={() => handleSort("high-low")}
            >
              high-low
            </button>
          </div>
          <div className="p-4 flex">
            <button
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              onClick={() => handleSort("low-high")}
            >
              low-high
            </button>
          </div>
        </div>

        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Image</th>

                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Price</th>
                <th className="text-left p-3 px-5">Detail</th>
                <th className="text-left p-3 px-5">Delete</th>

                <th />
              </tr>
              {data.map((elem) => {
                return (
                  <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5 w-7">
                      <img src={elem.image} alt="" />
                    </td>
                    <td className="p-3 px-5">{elem.name}</td>
                    <td className="p-3 px-5">${elem.price}</td>
                    <td>
                      <Link
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        to={`/${elem._id}`}
                      >
                        Detail
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => deleteProd(elem._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
