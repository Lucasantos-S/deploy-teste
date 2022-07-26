import React from "react";
import Head from "./Head";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";

function Produtos() {
  const [produto, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produto === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title="Renek | Produto" />
      {produto.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Produtos;
