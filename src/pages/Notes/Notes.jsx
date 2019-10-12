import React from 'react';
const Notes = (props) => {
   const { user, front, back} = props.notes;
   console.log("notes for you actors", user.name)
   return (
       <div>
           { user.name ?
               <h4>{user.name}</h4>
               :
               <h4>NO LOGGED USER</h4>
           }
           <h5>
           {front}
           </h5>

           <h4>
           {back}
           </h4>
       </div>
   );
}
export default Notes;
