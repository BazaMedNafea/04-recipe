import Card from "./Card";
/*
export const recipes = [
    {
        id:1,
        name:"Bourak",
        image: "https://i.ytimg.com/vi/w7vBB7cO-Ac/maxresdefault.jpg",
        tag: "Ramadan Plate",
        numberOFMinutes: 40
    },
    {
        id:2,
        name:"Chorba Frik",
        image: "https://miammiamyum.files.wordpress.com/2015/11/chorba-frik-algerian-freekeh-and-chicken-soup.jpg?w=799",
        tag: "Ramadan Plate",
        numberOFMinutes: 40
    },
    {
        id:3,
        name:"Tajin Zitoun",
        image: "https://theodehlicious.com/wp-content/uploads/2023/08/Tajine-Zitoune-III.jpg",
        tag: "Ramadan Plate",
        numberOFMinutes: 40
    },
    {
        id:4,
        name:"Bourak 2",
        image: "https://i.ytimg.com/vi/w7vBB7cO-Ac/maxresdefault.jpg",
        tag: "Ramadan Plate",
        numberOFMinutes: 40
    },
]
*/
export default function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
