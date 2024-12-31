// ANCHOR Spore
/*
    Spores are what drive the infections of the flood outbreak, a spore is downloaded to a server
    with admin access, and then it begins to amalgamate that server into the hivemind that is 
    the flood. If a Keymind or Gravemind are present then the spore will defer decision making 
    to it, otherwise, the spore will attempt to grow its resources by performing a 
    hack/grow/weaken cycle untill there are enough resources to spawn a Keymind.
*/
import { NS } from '@ns';

export class Spore {
    constructor() {
        console.log('Spore');
        this.server
        this.target
        this.hacking_level
        this.ram
        this.money
        this.next_upgrade_cost
        this.required_ram = 32
    }

    infect(): void {
        console.log('infect');
    }

    find_target(): void {
        console.log('Finding target');
    }

    attack_target(): void {
        console.log('Attacking target');
    }
}