import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  if(prisma.$connect != null ){
    console.log("connected")
  } else {
    console.log("disconnected")
  }
    
    // await prisma.user.create({
    //   data: {
    //     name: "abc",
    //     email: 'hello@prisma.com',
    //     posts: {
    //       create: {
    //         title: 'My first post',
    //       },
    //     },
    //   },
    // })

    // await prisma.user.update({
    //   where:{
    //     ids: '62e78af18e6a80fdf8e1c7dd',
    //   },
    //   data: {
    //     name: 'manish',
    //   }
    // })

    // await prisma.user.delete({
    //   where: {
    //     ids: '62e78979c6edb002f7ef7b0f',
    //   }
    // })


    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

    const post = await prisma.post.findMany()
    console.log(post)
  }
  
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$connect()
  })