import { useParams } from "react-router-dom";
import Searchbar from "../component/Searchbar";

export default function Clients() {
    const {id} = useParams();

    return (
        <div>
            <h1>Bievenue, id:{id}</h1>
            <Searchbar/>
        </div>
    );
}