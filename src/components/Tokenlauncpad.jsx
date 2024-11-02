import { createMint } from "@solana/spl-token";
export function TokenLaunchpad() {




    function createToken(){
        const name = document.getElementById("name").value;
        const symbol = document.getElementById("symbol").value;
        const imageurl = document.getElementById("imageurl").value;
        const intialsupply = document.getElementById("intialsupply").value;



    }
return <div>



   <h1>Solana Token LaunchPad</h1>
   <input id="name" type="text" placeholder="Name"></input><br/>
   <input id="symbol" type="text" placeholder="Symbol"></input><br/>
   <input id="imageurl" type="text" placeholder="Image Url"></input><br/>
   <input id="intialsupply"  type="text" placeholder="Intial Supply"></input><br/>
    <button onClick={createToken}>Create your Token</button>



   </div>
}