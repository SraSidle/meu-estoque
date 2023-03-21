import { mockProducts } from "helpers/data";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ProductsProviderData,
  AllProviderProps,
  ProductProps,
} from "types/interfaces/users";

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({
  children,
}: AllProviderProps): JSX.Element => {
  const [products, setProducts] = useState<ProductProps[]>(mockProducts);
  const [productsBK, setProductsBK] = useState<ProductProps[]>(mockProducts);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteProduct = (id: number): void => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      setProducts(productsBK);
    } else {
      const filteredData = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setProducts(filteredData);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSearch, [searchTerm]);

  useEffect(() => {
    setProductsBK(products);
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        searchTerm,
        handleDeleteProduct,
        handleChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsProviderData =>
  useContext(ProductsContext);
