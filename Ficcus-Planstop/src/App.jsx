import React, { useState, useEffect } from "react";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants when component loads
  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Toggle stock status (non-persisting)
  const handleToggleStock = (id) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );
    setPlants(updatedPlants);
  };

  // Filter plants based on search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Plant Shop 🌱</h1>

      {/* Search Input */}
      <form>
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Plant List */}
      <div className="plant-list">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} width="200" />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>

            <button onClick={() => handleToggleStock(plant.id)}>
              {plant.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;