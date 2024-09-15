import { Link } from 'react-router-dom';

<div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out">
  <Link to={`/recipe/${recipe.id}`}>
    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-700">{recipe.summary}</p>
    </div>
  </Link>
</div>
