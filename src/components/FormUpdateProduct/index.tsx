import { useState } from "react";
import { SAddProductForm, STextAreaContent } from "../FormAddProduct/style";
import Input from "components/Input";
import Message from "components/Message";
import { useProducts } from "contexts/Products.Context";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "types/interfaces/users";

const FormUpdateProduct = ({
  product,
}: {
  product: ProductProps;
}): JSX.Element => {
  const { products, setProducts, updateModal, setUpdateModal } = useProducts();
  const navigate = useNavigate();

  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<string>(product.price);
  const [department, setDepartment] = useState<string>(product.department);
  const [image, setImage] = useState<string>(product.image);
  const [adress, setAdress] = useState<string>(product.adress);
  const [description, setDescription] = useState<string>(product.description);
  const [amount, setAmount] = useState<string>(product.amount.toString());
  const [distance] = useState<string>(product.distance);
  const [messageState, setMessageState] = useState<Boolean>(false);
  const [messageValue, setMessageValue] = useState<string>("");

  const changeMessageState = (messageValue: string) => {
    setMessageState(true);
    setMessageValue(messageValue);
    setTimeout(() => {
      setMessageState(false);
    }, 5000);
  };
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      id: product.id,
      name: name,
      price: price,
      department: department,
      image: image,
      amount: Number(amount),
      description: description,
      adress: adress,
      distance: distance,
    };
    const currentProducts = products.filter((p) => product.id !== p.id);
    setProducts([...currentProducts, newProduct]);

    setName("");
    setDepartment("");
    setImage("");
    setPrice("");
    setDescription("");
    setAmount("");
    setAdress("");

    changeMessageState("Produto atualizado com sucesso!");
    navigate("/estoque-do-usuario/id");
  };

  return (
    <>
      {messageState && <Message message={messageValue} />}
      <SAddProductForm>
        <form onSubmit={handleAddProduct}>
          <Input
            label="Nome do Produto"
            type="text"
            value={setName}
            placeholder={product.name}
          />
          <Input
            label="Preço do Produto"
            type="text"
            value={setPrice}
            placeholder={product.price}
          />
          <Input
            label="Quantidade Disponível"
            type="name"
            value={setAmount}
            placeholder={product.amount.toString()}
          />
          <Input
            label="Imagem do produto"
            type="text"
            value={setImage}
            placeholder={product.image}
          />
          <Input
            label="Departamento do Produto"
            type="text"
            value={setDepartment}
            placeholder={product.department}
          />
          <Input
            label="Localização do Produto"
            type="text"
            value={setAdress}
            placeholder={product.adress}
          />
          <STextAreaContent>
            <label>Descrição do produto</label>
            <textarea value={description} onChange={handleTextareaChange} />
          </STextAreaContent>
          <button type="submit">Atualizar</button>
        </form>
        <div onClick={()=>{
          setUpdateModal(!updateModal)
        }}>❌</div>
      </SAddProductForm>
    </>
  );
};

export default FormUpdateProduct;
