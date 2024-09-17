/** @odoo-module */

import { Component } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.TodoItem"
    static props = {
        todo: {
            type: Object,
            shape: {id: Number, description: String, isCompleted: Boolean}
            },
            toogleState: Function,
            removeTodo: Function,
        };

        onChange(){
            this.props.toogleState(this.props.todo.id);
        }

        onRemove(){
            this.props.removeTodo(this.props.todo.id);
        }
}