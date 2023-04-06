function ProductItem(props) {
    const { id, name, cost, imgUrl, handleOnClick } = props;
  return (
    <article key={id} onClick={handleOnClick}>
        <p>Name: {name}</p>
        <p>Cost: {cost}</p>
        <img width= '100' height='100' src={imgUrl} alt='Empty'/>
    </article>
  )
}

export default ProductItem;