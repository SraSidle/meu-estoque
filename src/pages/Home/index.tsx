import {
  SDownContainer,
  SGraphicContainer,
  SHelloContainer,
  SHomeContainer,
  STopContainer,
} from "./style";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { data, dataBarras, dataTortas } from "helpers/graphic";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
 
  const COLORS = [
    "#0088FE",
    "#d32e2e",
    "#00c410",
    "#c3c310",
    "#1f73d3",
    "#b042ff",
  ];

  return (
    <>
      <Header />
      <SHomeContainer>
        <STopContainer>
          <SHelloContainer>
            <h1>{"Boas vindas, Poker.  Aqui está seu DashBoard!"}</h1>
            <h1 className="date">{dateDescription}</h1>
          </SHelloContainer>
          <button
            onClick={(): void => {
              navigate("/adicionar-novo-produto");
            }}
          >
            Novo produto
          </button>
        </STopContainer>

        <h1> Resumo mensal</h1>
        <ResponsiveContainer width="70%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="restante"
              stroke="#c3c310"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="saidas" stroke="#b6493a" />
            <Line type="monotone" dataKey="entradas" stroke="#2fdc72" />
          </LineChart>
        </ResponsiveContainer>

        <SDownContainer>
          <SGraphicContainer>
            <h1> Entradas e Saídas</h1>
            <BarChart
              width={600}
              height={300}
              data={dataBarras}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                label={{
                  value: "Mês",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
              <YAxis
                label={{
                  value: "Quantidade",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="saidas"
                fill="#b6493a"
                label={{ position: "top" }}
              />
              <Bar
                dataKey="entradas"
                fill="#2fdc72"
                label={{ position: "top" }}
              />
            </BarChart>
          </SGraphicContainer>

          <SGraphicContainer>
            <h1>Composição do seu Estoque</h1>
            <PieChart width={400} height={400}>
              <Pie
                data={dataTortas}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name }) => name}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dataTortas.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </SGraphicContainer>
        </SDownContainer>
      </SHomeContainer>
      <Footer />
    </>
  );
};

export default Home;
