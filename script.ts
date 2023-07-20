import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()

async function main(){

    // const user = await prisma.user.create({
    //     data:{
    //         name:'ananda',
    //         email:'annada@gmail',
    //     }
    // })

    // console.log(user)


    // const retrieve = await prisma.user.findMany() 
    //     console.log("retirieved:  ",retrieve)


    // const user = await prisma.user.create({
    //     data:{
    //         name:'bob',
    //         email:'bob@gmail',
    //         posts:{
    //             create:{
    //                 title:'Hello '
    //             }
    //         }
    //     }

    // })

    // console.log(user)
    
    const userWithPosts =await prisma.user.findMany({
        include:{
            posts:true,
        }
    })

    // console.dir(userWithPosts,{depth:null})   
    console.log(userWithPosts)




}


main().then (async() =>{
    await prisma.$disconnect()
}).catch(async (e) =>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})