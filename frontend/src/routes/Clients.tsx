import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getClient } from "../utils/client";
import Searchbar from "../components/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { Area, Pie } from '@ant-design/plots';
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
        <div style={{display:'flex'}}>
          <DemoArea/>
          <DemoPie/>
        </div>
      </div>

      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

const DemoArea = () => {
  const [data, setData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    asyncFetch();
  }, [id]);

  const asyncFetch = () => {
    fetch('http://localhost:5000/client/'+id)
      .then((response) => response.json())
      .then((json) => {
      setData(json);
      //console.dir(json);
  })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'jour',
    yField: 'credit',
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
  
};

const DemoPie = () => {
  const [data, setData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    asyncFetch();
  }, [id]);

  const asyncFetch = () => {
    fetch('http://localhost:5000/client/'+id)
      .then((response) => response.json())
      .then((json) => {
      setData(json);
      console.dir(json);
  })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  
  const config = {
    appendPadding: 10,
    data,
    angleField: 'credit',
    colorField: 'jour',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: 'credit',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Credit\n',
      },
    },
  };
  return <Pie {...config} />;
};


  
