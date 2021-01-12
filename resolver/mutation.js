async function sendMessage (parent,args,context,info){
    return context.prisma.chat.create ({
        data: {
            sendFrom: {
                connect: {id:  args.sendFrom}
            },
            receiveFrom: {
                connect: {id: args.receiveFrom}
            },
            media: args.media,
            text: args.text
        }
    })
}