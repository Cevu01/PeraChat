export const processText = async (text) => {
  try {
    const response = await fetch("http://54.188.217.11:8000/process_text", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error("HTTP greška:", response.status);
      throw new Error(`HTTP greška: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Greška pri fetchovanju:", error);
    throw error; // Propagiranje greške za obradu u komponenti
  }
};
