import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";


function Produto() {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { id } = useParams();


  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Pagina não encontrada");
      } finally {
        setLoading(false);
       
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return  <div className="loading"></div>
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Esse e o produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map(({ src, titulo }) => (
          <img key={src} src={src} alt={titulo}></img>
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
