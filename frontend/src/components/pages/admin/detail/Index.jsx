import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setdata] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`flowers/${id}`).then((res) => {
      setdata(res.data);
    });
  }, [id]);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin-Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img className="rounded-t-lg " src={data.image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
      </div>
      <p>{data.price}</p>
    </div>
  );
};

export default Detail;
