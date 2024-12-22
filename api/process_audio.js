export const sendFileNameToBackend = async (fileName) => {
  try {
    console.log("Slanje POST zahteva sa file_name:", fileName);
    const response = await fetch("http://54.188.217.11:8000/process_audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ file_name: fileName }), // Slanje imena fajla
    });

    if (!response.ok) {
      throw new Error(`Greška: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Odgovor sa servera:", data);
    return data;
  } catch (error) {
    console.error("Greška pri slanju zahteva:", error.message);
  }
};
