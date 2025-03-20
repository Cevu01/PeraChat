export const processText = async (
  text,
  collectionName,
  retries = 5,
  delay = 3000
) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(
        "https://x4661ug1wj.execute-api.us-west-2.amazonaws.com/process_text",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, collection_name: collectionName }),
        }
      );

      if (response.ok) {
        return await response.json();
      } else if (response.status === 503) {
        console.warn(`API nedostupan, čekam ${delay / 1000} sekundi...`);
        await new Promise((resolve) => setTimeout(resolve, delay)); // Sačekaj pre ponovnog pokušaja
      } else {
        throw new Error(
          `HTTP greška: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      if (attempt === retries - 1) throw error;
    }
  }
  throw new Error("API nije dostupan nakon više pokušaja.");
};
