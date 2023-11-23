function Carta({ item, id, Clique }) {

    // Atribui uma classe condicional com base no estado da carta
    //Aqui, está sendo usada uma expressão ternária. Se item.estado for verdadeiro, classeItem será uma string que contém a palavra "ativo" seguida pelo valor de item.estado. Se item.estado for falso, classeItem será uma string vazia.
    const classeItem = item.status ? " ativo " + item.status : "";

    return (
        // Componente de carta que responde ao clique
        <div className={"carta" + classeItem} onClick={() => Clique(id)}>
            <img src={item.img} alt="" />
        </div>
    );
}

export default Carta;
