import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getClient } from "../utils/client";
import Searchbar from "../components/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { Area } from '@ant-design/plots';
import ReactDOM from 'react-dom';

export default function Clients() {
  const { id } = useParams();

  const {
    data: client,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["client", id],
    queryFn: async () => {
      if (id) return getClient(id);
    },
  });

  return (
    <div>
      <h1>Bienvenue, id:{id}</h1>
      <Searchbar />
      <div>
        {isLoading && <p>Loading...</p>}
        {error instanceof Error && (
          <p>Une erreur est survenue : {error.message}</p>
        )}

        <p>{client?.AMT_INCOME_TOTAL}</p>
        <DemoArea/>
      </div>

      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

const DemoArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((json) => {
      setData(json);
      console.log(json);
  })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'DAYS_CREDIT',
    yField: 'AMT_CREDIT_SUM',
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
  
};


  
