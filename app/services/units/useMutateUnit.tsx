"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const postUnit = (name: string): Promise<Unit> =>
  Promise.resolve({
    id: Math.random().toString(36).substr(2, 9),
    name,
  });

export const useMutateUnit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUnit,
    onSuccess: (data) => {
      queryClient.setQueryData(["units"], (oldData: Unit[] | undefined) =>
        oldData ? [...oldData, data] : [data],
      );
    },
  });
};
