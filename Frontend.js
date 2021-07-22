import e from "cors";
import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import { TableCell, TableRow } from "@material-ui/core";

function Frontend() {
   const [name, setName] = useState("");
   const [number, setNumber] = useState("");
   const [email, setEmail] = useState("");
   const [image, setImage] = useState("");
   const [state, setstate] = useState([]);

   const handleChange = (e) => {
      setName(e.target.value);
   };

   const handleManage = (e) => {
      setEmail(e.target.value);
   };

   const handleNumber = (e) => {
      setNumber(e.target.value);
   };
   const countArr = [
      {
         name: name,
         email: email,
         number: number,
         image: image,
      },
   ];
   const onSubmit = (e) => {
      e.preventDefault();

      setstate(countArr);
      console.log("state1", state);
   };

   const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
         let img = e.target.files[0];
         setImage({
            image: URL.createObjectURL(img),
         });
      }
   };
   console.log("image", image);

   return (
      <div>
         <form onSubmit="onSubmit">
            <label>Name</label>
            <input
               type="text"
               placeholder="enter name"
               name={name}
               onChange={(e) => handleChange(e)}
            ></input>
            <label>Eamil</label>
            <input
               type="email"
               value={email}
               placeholder="enter email"
               onChange={(e) => handleManage(e)}
            ></input>
            <label>Phone Number</label>
            <input
               type="text"
               value={number}
               placeholder="enter ph-no"
               onChange={(e) => handleNumber(e)}
            ></input>

            <img src={image} />

            <input
               type="file"
               name="myImage"
               onChange={(e) => onImageChange}
               as
            />
            <button onClick={onSubmit}>Submit</button>
         </form>

         <Table>
            <TableRow>
               <TableCell>S.no</TableCell>

               <TableCell>Name</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>PhoneNumber</TableCell>
               <TableCell>Images</TableCell>
            </TableRow>
            {console.log("state2", state)}
            {state.map((row, index) => {
               return (
                  <TableRow>
                     <TableCell>{index}</TableCell>
                     <TableCell>{row.name}</TableCell>
                     <TableCell>{row.email}</TableCell>
                     <TableCell>{row.number}</TableCell>
                     <TableCell>{row.image}</TableCell>
                  </TableRow>
               );
            })}
         </Table>
      </div>
   );
}

export default Frontend;
