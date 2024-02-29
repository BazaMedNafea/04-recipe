import CardList from "../components/CardList"
import Header from "../components/Header"
import axios from "axios"
import { useEffect ,useState } from "react"; 

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



export default function HomePage() {

    const [recipes, setRecipies] = useState([])

    useEffect(() => {
        fetchRecipies();
    }, []);
    
    const fetchRecipies = async () => {
        try {
            const response = await axios.request(options);
            setRecipies(response.data.results);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
     <>
        <Header />
        <CardList recipes={recipes}/>
        </>
    );
}