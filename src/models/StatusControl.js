import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    async createStatus(req, res) {
        const { name, address, protocolo } = req.body;
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        if(!user) {
            return res.json({message: "Usuário inexistente"})
        }
        const status = await prisma.status.create({
            data: {
                name,
                address,
                protocolo,
                userId: user.id,
            },
            include: {
                user: true
            },
        });
        return res.json(status);
    },

}



