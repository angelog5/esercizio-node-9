async function agetResults() {
  try {
    const resultTina = await luckyDraw("Tina");
    console.log(resultTina);

    const resultJorge = await luckyDraw("George");
    console.log(resultJorge);

    const resultJulien = await luckyDraw("Julien");
    console.log(resultJulien);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

agetResults();
