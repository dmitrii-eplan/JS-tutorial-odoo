/** @odoo-module */

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "./clicker_hook";
import { ClickerValue } from "./clicker_value";
import { Dropdown } from "@web/core/dropdown/dropdown"
import { DropdownItem } from "@web/core/dropdown/dropdown_item"


export class ClickerSystray extends Component {
    static template = "awesome_clicker.ClickerSystray";
    static props = {};
    static components = { ClickerValue, Dropdown, DropdownItem };

    setup() {
        // this.state = useState({ counter: 0 });
        this.action = useService("action");
        this.clicker = useClicker();
        // useExternalListener(document.body, "click", () => this.state.counter++, true);
    }

    // increment() {
    //     this.state.counter += 9;
    // }

    openClientAction(){
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.ClickerClientAction",
            target: "new",
            name: "Clicker"
            })
    }

    get numberTrees() {
        let sum = 0;
        for (const tree in this.clicker.trees) {
            sum += this.clicker.trees[tree].purchased;
        }
        return sum;
    }

    get numberFruits() {
        let sum = 0;
        for (const fruit in this.clicker.fruits) {
            sum += this.clicker.fruits[fruit];
        }
        return sum;
    }
}

export const systrayItem = {
    Component: ClickerSystray,
};

registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem);