import { useQueryClient } from "@tanstack/react-query";

const useInvalidate = () => {
  const queryClient = useQueryClient();

  // Fonction utilitaire pour invalider les requêtes
  const invalidate = (queryKey: string) => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  };

  return { invalidate };
};

export default useInvalidate;
