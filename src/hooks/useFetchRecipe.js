import axios from 'axios';
import { useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {id: '8138'},
  headers: {
    'X-RapidAPI-Key': '91d02f8247mshd5ba1816714ff9ep131300jsn550f2f2c477a',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};



const useFetchRecipe = () => {
    const [recipe, setRecipie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchRecipie = async (id) => {
        setLoading(true);
        setRecipie(null);
        setError(null);
        try {
            const reqOptions = {...options}
            reqOptions.params.id= id;
            const response = await axios.request(reqOptions);
            setRecipie(response.data);
            setLoading(false) ;
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipie, {data: recipe, loading, error}];
}
export default useFetchRecipe