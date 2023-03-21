import { useState } from "react";
import { mockProducts } from "helpers/data";
import { SAddProductForm, STextAreaContent } from "./style";
import Input from "components/Input";
import Message from "components/Message";

const FormAddProduct = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [distance] = useState<string>("16");
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
      id: mockProducts.length + 1,
      name: name,
      price: price,
      department: department,
      image: image,
      amount: Number(amount),
      description: description,
      adress: adress,
      distance: distance,
    };

    mockProducts.push(newProduct);
    setName("");
    setDepartment("");
    setImage("");
    setPrice("");
    setDescription("");
    setAmount("");
    setAdress("");
    changeMessageState("Produto adicionado com sucesso!");
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
            placeholder="Bola de Futebol profissional"
          />
          <Input
            label="Preço do Produto"
            type="text"
            value={setPrice}
            placeholder="Bola de Futebol profissional"
          />
          <Input
            label="Quantidade Disponível"
            type="name"
            value={setAmount}
            placeholder="180"
          />
          <Input
            label="Imagem do produto"
            type="text"
            value={setImage}
            placeholder="images/"
          />
          <Input
            label="Departamento do Produto"
            type="text"
            value={setDepartment}
            placeholder="Esporte e Lazer"
          />
          <Input
            label="Localização do Produto"
            type="text"
            value={setAdress}
            placeholder="Galpão 01, Rua 03, Divisória 03, plateleira"
          />
          <STextAreaContent>
            <label>Descrição do produto</label>
            <textarea value={description} onChange={handleTextareaChange} />
          </STextAreaContent>
          <button type="submit">Adicionar</button>
        </form>
      </SAddProductForm>
    </>
  );
};

export default FormAddProduct;
