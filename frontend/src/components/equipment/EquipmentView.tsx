import React, {Component, FC} from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {EquipmentDTO} from "@/class/dto/EquipmentDTO.tsx";
import Item from "@/components/equipment/Item.tsx";
import {EquipmentController} from "@/class/controller/EquipmentController.tsx";
import {cn} from "@/lib/utils.ts";
import {Gamepad2} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

class EquipmentView extends Component<any, any> {

    private equipment: EquipmentDTO;
    private equipmentController: EquipmentController;

    constructor(props) {
        super(props);
        this.equipment = props.equipment;
        this.equipmentController = new EquipmentController();
    }

    render() {
        return (
            <>
                <Button onClick={() => this.equipmentController.onBackButtonClick()}
                        className={cn(
                            "cursor-pointer flex bg-indigo-500 hover:bg-indigo-400 gap-1 "
                        )}
                >
                    <Gamepad2/>
                    <h1 className="sm:block">Cofnij</h1>
                </Button>
                <div>Zajęte miejsce: {this.equipment.currentCapacity}/{this.equipment.size}</div>
                <Table className="mt-5 sm:mt-5 text-xs sm:text-sm sm:table">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Zdjęcie</TableHead>
                            <TableHead className="pl-2">Nazwa</TableHead>
                            <TableHead>Ilość</TableHead>
                            <TableHead>Waga</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.equipment.items &&
                            this.equipment.items.map((item) => <Item key={item.id} item={item} />)}
                    </TableBody>
                </Table>
            </>
        );
    }
}

export default EquipmentView;
