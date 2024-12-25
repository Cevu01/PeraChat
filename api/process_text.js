export const processText = async (text, collectionName) => {
  console.log(
    "Zapoceto slanje zahteva ka API-ju sa tekstom:",
    text,
    "i kolekcijom:",
    collectionName
  ); // Log pre fetch-a

  try {
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

    console.log("HTTP status kod odgovora:", response.status); // Log statusa odgovora

    if (!response.ok) {
      console.error("HTTP greška:", response.status, response.statusText); // Log za HTTP greške
      throw new Error(`HTTP greška: ${response.status}`);
    }

    const data = await response.json();
    console.log("Primljeni podaci od API-ja:", data); // Log uspešnog odgovora
    return data;
  } catch (error) {
    console.error("Greška pri fetchovanju:", error); // Log za grešku
    alert("Greška pri fetchovanju: " + error.message);
    throw error; // Propagiranje greške za obradu u komponenti
  }
};
