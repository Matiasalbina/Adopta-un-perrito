import {MyCard} from './MyCard'
export const MyGrid = ({ posts }) => {
  return (
    <>
     <div className='flex'>
        {posts.length ? (
            posts.map((post) => <MyCard {...post}/>)
          )  :  (
                  <h1>no hay names</h1>
                )}
        </div>
    </>
   
  );
}

