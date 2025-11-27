

export default function ColonneFooter(){

   const Dc = [
  "Terms Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  "Subscriptions",
  "Talent Workshops",
  "CPSC Certificates",
  "Ratings",
  "Shop Help",
   "Contact Us"
];

   const Dciao = [
  "Terms Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  
];

const Dciaoe = [
  "Terms Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  "Terms Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  "Terms Of Use",
  "Privacy policy (New)",
  "Ad Choices",
  "Advertising",
  "Jobs",
  
];

    return(
      <>
      <div className="flex">
      <ul className="p-bottom">
        <h3>ciao</h3>
      {Dc.map((link, index)=>
      
     <li key ={index}> <a href="">{link}</a></li>  )}
     </ul>
      
         <ul className="p-bottom">
           <h3 p-20>ciao</h3>
      {Dciao.map((link, index)=>
      
     <li key ={index}> <a href="">{link}</a></li>  )}
     </ul> 

         <ul className="p-bottom">
           <h3 p-20>ciao</h3>
      {Dciaoe.map((link, index)=>
      
     <li key ={index}> <a href="">{link}</a></li>  )}
     </ul> 
     </div>
         </>     
      )  
      
   
    
      
        
              
       
}
