import Cabecalho from "components/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet /> {/*onde as rotas filhas vão ficar dentro da rota pai*/}
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase