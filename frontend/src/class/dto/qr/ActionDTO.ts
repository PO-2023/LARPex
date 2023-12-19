export class ActionDTO {
    constructor(public actionType: string, public itemId: number, public itemQuantity: number, public playerId: number, public doorId: number) {
    }
}
