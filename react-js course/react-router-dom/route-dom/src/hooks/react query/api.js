const productlist=[
    {
       id:1,
       name:"product 1",

    },
        {
       id:2,
       name:"product 2",

    },
        {
       id:3,
       name:"product 3",

    }
]

export const fetchdata=async ()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));

    return productlist;
}

export const addnewproduct=async (productname)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));

    const newproduct={
        id:productlist.length+1,
        name:productname
    }

    productlist.push(newproduct);
    
    return productlist;
}