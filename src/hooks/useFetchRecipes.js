import axios from "axios";
import { useState } from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
   
    },
    headers: {
      'X-RapidAPI-Key': '91d02f8247mshd5ba1816714ff9ep131300jsn550f2f2c477a',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
const useFetchRecipes = () => {
    const [recipes, setRecipies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchRecipies = async (searchTerm) => {
        setLoading(true);
        setRecipies(null);
        setError(null);
        try {
            const reqOptions = {...options}
            if(searchTerm){
                reqOptions.params.q = searchTerm
            }
            const response = await axios.request(reqOptions);
            setRecipies(response.data.results);
            setLoading(false) ;
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipies, {data: recipes, loading, error}];
};

export default useFetchRecipes;