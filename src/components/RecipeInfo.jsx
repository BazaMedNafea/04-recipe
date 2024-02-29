export default function RecipeInfo({ instructions }) {
  return (
    <div className="recipe-info">
      <div className="recipe-info-container">
        <div className="recipe-info-header">
          <h3>INSTRUCTIONS</h3>
        </div>
        {instructions.map(({ display_text, position }) => (
          <div className="recipe-info-content-container">
            <p className="recipe-step">{position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
