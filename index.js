import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  if(prisma.$connect != null ){
    console.log("connected")
  } else {
    console.log("disconnected")
  }
    
    await prisma.user.create({
      data: {
        name: "manishtalele",
        email: 'MT@prisma.com',
        posts: {
          create: {
            title: 'going to hell',
          },
        },
      },
    })

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
    //     ids: '62e7e92e6c35438298e861e4',
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