import http from 'http';

const data = JSON.stringify({
    deviceId: "1",
    ip: "192.168.16.161",
    port: 4370
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/v1/devices/connect',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

console.log('--- ENVIANDO SOLICITUD DE CONEXIÓN AL DISPOSITIVO 1 (192.168.16.161) ---');

const req = http.request(options, (res) => {
    let body = '';
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        try {
            const parsed = JSON.parse(body);
            console.log('RESPUESTA DEL SERVIDOR:', JSON.stringify(parsed, null, 2));
            if (parsed.success) {
                console.log('\n✅ DISPOSITIVO CONECTADO EXITOSAMENTE');
                console.log('Información técnica:', parsed.data);
            } else {
                console.log('\n❌ ERROR AL CONECTAR:', parsed.error || parsed.message);
            }
        } catch (e) {
            console.log('RESPUESTA NO JSON:', body);
        }
    });
});

req.on('error', (e) => {
    console.error('ERROR EN LA PETICIÓN:', e.message);
});

req.write(data);
req.end();
