// 30.oct
import fetch from 'node-fetch'

export async function statusController(address) {
    try {
        const response = await fetch('http://' + address);
        return response;
    } catch (error) {
        const response = {
            ok: false,
            status: 404,
            statusText: 'Not Found',
            url: 'http://' + address,
        };
        return response;
    }
}


export async function statusControllerr(hostp1) {
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