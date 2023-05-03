class hashKey{
    constructor(size){
        this.table = new Array(size)
        this.size=size
    }
    hash(key){
        let total=0;
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total%this.size
    }

     set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }
     }

     get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            return bucket
        }
     }

}

const newHash=new hashKey(50)

newHash.set("name","hemanth")


console.log(newHash.get("name"))