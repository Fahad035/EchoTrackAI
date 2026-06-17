export const calculateCarbon = (
  carKm,
  electricityUnits,
  diet
) => {

  const breakdown = calculateCarbonBreakdown(carKm, electricityUnits, diet);

  return breakdown.total.toFixed(2);
};

export const calculateCarbonBreakdown = (
  carKm,
  electricityUnits,
  diet
) => {

  const transportEmission =
    Number(carKm) * 0.21;

  const electricityEmission =
    Number(electricityUnits) * 0.82;

  const foodEmission =
    diet === "veg"
      ? 50
      : diet === "mixed"
      ? 100
      : 150;

  return (
    {
      transportEmission,
      electricityEmission,
      foodEmission,
      total: transportEmission + electricityEmission + foodEmission,
    }
  );
};