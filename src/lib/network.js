import ping from 'ping';
import { execSync } from 'node:child_process';

export async function getHostLatency(host, count = 1) {
  let result = await ping.promise.probe(host, { min_reply: count });

  return result;
}

export async function getHostLatencyManual(host, count = 1) {
  let match;

  const times = [];

  const command = `ping ${host} -c ${count}`;

  const result = execSync(command).toString();

  const pattern = /time=(?<time>.+) ms/g;

  while ((match = pattern.exec(result))) {
    const { groups: time } = match;

    times.push(Number(time.time));
  }

  return { times };
}