import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton'
import pizzas from '../assets/db.json'
import { useEffect, useState } from 'react';


function Home() {
  const [items, setItems] = useState([])
  const [isLoarding, setIsLoardig] = useState(true)

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState ({name: 'популярности', sortProperty: 'rating'})
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const orderBy = sortType.sortProperty.replace('-', '')
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc'

  useEffect(()=>{
    ssetIsLoardig(true)
    fetch(`https://629b5375656cea05fc374b90.mockapi.io/items?${category}&orderBy=${orderBy}&order=${order}`)
    .then((res)=>res.json())
    .then((data)=>setItems(data))
    setTimeout(()=>setIsLoardig(false), 1000)
  }, [categoryId, sortType])
  return(
    <div className="container">
      <div className="content__top">
        <Categories categoryId = {categoryId} onChangeCategory = {(id) =>setCategoryId(id)}/>
        <Sort sortType ={sortType} onChangeSort = {(obj) => setSortType(obj)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoarding ? [...new Array(6)].map(()=><Skeleton />) :
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} /> )
        }
      </div>
    </div>
  )
}

export default Home;