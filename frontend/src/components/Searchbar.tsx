import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value || value.length !== 6) return;

    navigate(`/clients/${value}`);

    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min={100001}
          max={456255}
          value={value}
          placeholder="Search by id"
          onChange={handleChange}
        />
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
