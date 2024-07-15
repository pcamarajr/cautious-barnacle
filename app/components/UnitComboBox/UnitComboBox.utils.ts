export const getUnitOptions = (units: Unit[]) => units.map(getUnitOption);

export const getUnitOption = (unit: Unit) => ({
  label: unit.name,
  value: unit.id.toString(),
});
