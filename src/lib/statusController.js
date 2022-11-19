// 30.oct
import fetch from 'node-fetch'

export async function statusController(hostp1) {
    try {
        const response = await fetch('http://' + hostp1);
        return response;
} 
    catch (error) {
        const response = {
            url: hostp1,
            ok: false,
            status: 404,
            statusText: 'Not Found',
        };
        return response;
    }
}