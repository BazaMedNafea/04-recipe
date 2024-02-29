import { useState } from "react";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <header className="main_header">
      <div className="text_container">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          illo, consequuntur commodi ratione laboriosam mollitia provident
          inventore hic aliquid optio.
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pic"
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
