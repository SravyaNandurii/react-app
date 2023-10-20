import Card from '../cards/card';
import Header from '../header/header';
import '../Watch_list/Watch_list.css'
const Mylist=({all,setall})=>{
    console.log(all)
    return(
        
        <div className="no">
            <Header />
            {all.map((a,index) => a.isliked ? <Card r={a} ind={index} setall={setall} all1={all}/>:null)}
        </div>
    )
}
export default Mylist;