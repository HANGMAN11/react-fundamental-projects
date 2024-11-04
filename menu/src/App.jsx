import React, { useState } from "react";
import Title from "./title";
import menu from './data'
import Menu from "./menu";
import Categories from "./Categories";

const allCategories = ['all', ...new Set(menu.map((item)=>item.category))]

const App = () => {
  const [food, setFood] = useState(menu)
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) =>{
    if(category === 'all'){
      setFood(menu);
      return
    }
    const newItems = menu.filter((item)=> item.category === category)
    setFood(newItems)
  }
  return <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={food}/>
    </section>
  </main>;
};
export default App;
