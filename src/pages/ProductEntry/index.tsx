import Footer from "components/Footer";
import Header from "components/Header";
import { SProductEntry } from "./style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { dataOutputsLines, dataOutputsTortas } from "helpers/graphic";
import { SGraphicContainer } from "pages/Home/style";

const ProductEntry = (): JSX.Element => {
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

      <SProductEntry>
        <h1>Saída de Produtos por Hora</h1>
        <ResponsiveContainer width="70%" height={300}>
          <LineChart data={dataOutputsLines}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="horario" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="saidas" stroke="#2fdc72" />
          </LineChart>
        </ResponsiveContainer>

        <SGraphicContainer
        className="tortas"
        >
            <h1>Saída de cada Produto</h1>
            <PieChart width={400} height={400}>
              <Pie
                data={dataOutputsTortas}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name }) => name}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dataOutputsTortas.map((entry, index) => (
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
      </SProductEntry>
      <Footer />
    </>
  );
};

export default ProductEntry;
