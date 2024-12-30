import { NS } from "@ns";

export function main(
    ns: NS, 
    server: string
): void {
	const serverData = ns.getServer(server);
    if (!serverData) {
        ns.tprint(`Could not find server '${server}'`);
        return;
    }

    if (serverData.hasAdminRights) {
        ns.tprint(`${server}: Already has root access.`);
        return;
    }
    
	ns.tprint(`Attempting to gain root access on '${server}'`);
	if (ns.fileExists("brutessh.exe")) {
		ns.brutessh(server);
	}
	if (ns.fileExists("ftpcrack.exe")) {
		ns.ftpcrack(server);
	}
	if (ns.fileExists("relaysmtp.exe")) {
		ns.relaysmtp(server);
	}
	if (ns.fileExists("httpworm.exe")) {
		ns.httpworm(server);
	}
	if (ns.fileExists("sqlinject.exe")) {
		ns.sqlinject(server);
	}
    
    const openPortCount = serverData.openPortCount ?? 0;
	if (ns.getServerNumPortsRequired(server) <= openPortCount) {
		ns.nuke(server);
		ns.tprint(`${server}: Success!`);
	} else {
		ns.tprint(`${server}: Failed...`);
	}
}