export const processText = async (text) => {
  console.log("Zapoceto slanje zahteva ka API-ju sa tekstom:", text); // Log pre fetch-a

  try {
    const response = await fetch("http://54.188.217.11:8000/process_text", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

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
