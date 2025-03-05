// Simulated Pokemon data (replacing DOM access)
const pokes = [
    { name: "bulbasaur", types: ["grass", "poison"] },
    { name: "charmander", types: ["fire"] },
    { name: "charizard", types: ["fire", "flying"] },
    { name: "squirtle", types: ["water"] },
    { name: "caterpie", types: ["bug"] },
    { name: "butterfree", types: ["bug", "flying"] },
    { name: "rattata", types: ["normal"] },
    { name: "fearow", types: ["normal", "flying"] },
    { name: "arbok", types: ["poison"] },
    { name: "venomoth", types: ["bug", "poison"] },
  ];
    
  // Task 1: Find all Pokemon with the type "grass"
  const type = "grass";
  const grassPokemon = [];
  
  // Task 2: Find Pokemon with types "bug" OR "poison", and "bug" AND "poison"
  const types = ["bug", "poison"];
  const bugOrPoisonPokemon = [];
  const bugAndPoisonPokemon = [];
  
  // Filter the Pokemon data
  for (const poke of pokes) {
    // Task 1: Pokemon with "grass" type
    if (poke.types.includes(type)) {
      grassPokemon.push(poke.name);
    }
  
    // Task 2: Pokemon with "bug" OR "poison"
    if (types.some(t => poke.types.includes(t))) {
      bugOrPoisonPokemon.push(poke.name);
    }
  
    // Task 2: Pokemon with both "bug" AND "poison"
    if (types.every(t => poke.types.includes(t))) {
      bugAndPoisonPokemon.push(poke.name);
    }
  }
  
  // Output the results
  console.log("Pokemon with type 'grass':", grassPokemon);
  console.log("Pokemon with type 'bug' OR 'poison':", bugOrPoisonPokemon);
  console.log("Pokemon with types 'bug' AND 'poison':", bugAndPoisonPokemon);