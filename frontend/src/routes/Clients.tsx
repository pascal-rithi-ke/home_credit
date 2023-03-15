import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getClient } from "../utils/client";
import Searchbar from "../components/Searchbar";
import { useQuery } from "@tanstack/react-query";

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
      </div>

      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
