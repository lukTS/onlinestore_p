function Categories( {categoryId, onChangeCategory}) {
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li key={i+value}
            onClick = {() => onChangeCategory(i)} 
            className={categoryId === i ? "active" : ""}>{value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;