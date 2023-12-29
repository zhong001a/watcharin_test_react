const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getOneProduct(id),
  });