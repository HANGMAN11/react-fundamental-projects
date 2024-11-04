import MenuItem from "./MenuItem"

const Menu = ({items }) =>{
    return <div className="section-center">
        {items.map((food)=>{
            return <MenuItem key={food.id} {...food}/>
        })}
    </div>
}

export default Menu