import axios from "axios";
import type { IClient } from "../types";

export async function getClient(id: string) {
  try {
    const response = await axios.get(`http://localhost:5000/client/${id}`);
    const { data } = await response;
    return data;
  } catch (err) {
    console.error(err);
  }
}
