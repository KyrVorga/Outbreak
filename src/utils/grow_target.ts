import { NS } from "@ns";

export async function main(
	ns: NS,
	target: string = ns.args[0] as string,
	time: number = ns.args[1] as number
): Promise<void> {
	await ns.sleep(time);
	await ns.grow(target);
}
