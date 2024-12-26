export const processText = async (text, collectionName) => {
  try {
    // Slanje POST zahteva na backend
    const response = await fetch(
      "https://x4661ug1wj.execute-api.us-west-2.amazonaws.com/process_text",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, collection_name: collectionName }), // Slanje oba parametra
      }
    );

    // Provera odgovora
    if (!response.ok) {
      const errorMessage = `HTTP greška: ${response.status} - ${response.statusText}`;
      alert("Greška", errorMessage); // Prikazivanje greške korisniku
      throw new Error(errorMessage);
    }

    // Parsiranje JSON odgovora
    const data = await response.json();
    return data;
  } catch (error) {
    // Alert za greške tokom fetchovanja
    throw error; // Propagiranje greške za dalju obradu
  }
};
