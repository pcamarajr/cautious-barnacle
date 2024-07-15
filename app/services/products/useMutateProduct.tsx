"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const postProduct = (product: Omit<Product, "id">): Promise<Product> =>
  Promise.resolve({
    id: Math.random().toString(36).substr(2, 9),
    ...product,
  });

export const useMutateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["products"],
        (oldData: Product[] | undefined) =>
          oldData ? [...oldData, data] : [data],
      );
    },
  });
};
