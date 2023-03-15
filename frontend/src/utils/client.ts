import axios from "axios";
import type { Client } from "../types/Client";

export async function getClient(id: string) {
  try {
    const response = await axios.get(`http://localhost:5000/client/${id}`);
    const { resultat } = await response.data;
    return resultat["0"] as Client;
  } catch (err) {
    console.error(err);
  }
}
