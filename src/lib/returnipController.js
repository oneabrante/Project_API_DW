import dns from 'dns';
import https from 'https';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export default {
    async ipaddr(req, res) {
        const { id } = req.params;
        const status = await prisma.status.findUnique({ where: { id: Number(id) } });
        if(!status) {
            return res.json({message: "Status inexistente"})
        }
        const { address } = status;
        dns.lookup(address, (err, address) => {
            https.get(`https://ipinfo.io/${address}/json`, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    res.json(JSON.parse(data));
                });
            }).on("error", (err) => {
                res.json({message: "Error: " + err.message});
            });
        })

    }
}
       