export const downloadJSON = (data, filename = "facts.json") => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCSV = (data, filename = "facts.csv") => {
  if (!data.length) return;

  const csvContent =
    "ID,Fact\n" + data.map((f) => `"${f.id}","${f.text}"`).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const printToConsole = (data) => {
  console.log("Fetched Facts:", data);
};
