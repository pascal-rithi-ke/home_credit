import axios from "axios";
import type { IClient } from "../types";

export async function getClient(id: string) {
  try {
    const response = await axios.get(`http://localhost:5000/client/${id}`);
    const { resultat } = await response.data;
    return resultat["0"] as IClient;
  } catch (err) {
    console.error(err);
  }
}
