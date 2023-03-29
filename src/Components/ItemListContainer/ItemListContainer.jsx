import './ItemListContainer.css'

const ItemListContainer = (props) => {

    let {saludo} = props;

  return (
    <h1 className="titulo">{saludo}</h1>
  )
}

export default ItemListContainer