const url = 'https://rickandmortyapi.com/api/character'

const getcharacters = async (URL) => {
    const response = await fetch (URL)
    const data = await response.json()

    console.log(data.results.lenght);
    
  }