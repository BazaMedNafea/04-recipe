import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [fetchRecipies, { data, loading, error }] = useFetchRecipes();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    fetchRecipies(searchParams.get("search"));
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchRecipies(searchTerm);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
