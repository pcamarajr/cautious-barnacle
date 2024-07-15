"use client";

import { useQuery } from "@tanstack/react-query";

const fetchUnits = async (): Promise<Unit[]> =>
  Promise.resolve([
    { id: "3jd8", name: "Kilos", symbol: "kg" },
    { id: "2ji8", name: "Grams", symbol: "g" },
    { id: "asjs8", name: "Liters", symbol: "l" },
    { id: "8qma", name: "Mili Liters", symbol: "ml" },
    { id: "6srw", name: "Pieces", symbol: "pc" },
  ]);

export const useFetchUnits = () =>
  useQuery<Unit[]>({
    queryKey: ["units"],
    queryFn: fetchUnits,
  });
