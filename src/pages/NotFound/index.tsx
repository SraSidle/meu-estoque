import Footer from "components/Footer"
import Header from "components/Header"
import { SNotFound } from "./style"

const NotFound = (): JSX.Element => {
    return(
        <>
        <Header />
        < SNotFound>     
        <h1>Error: 404-página não encontrada</h1>
        </SNotFound>
        <Footer />
        </>
    )
}

export default NotFound;