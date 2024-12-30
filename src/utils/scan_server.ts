import { NS } from "@ns";

export function main(
    ns: NS, 
    server: string
): string[] {
	const scannedServers: string[] = [];

	function scanner(server: string): void {
		const currentScan = ns.scan(server);

        for (server of currentScan) {
            if (!scannedServers.includes(server)) {
                scannedServers.push(server);
                scanner(server);
            }
        }
	}

	scanner(server);
	return scannedServers;
}
