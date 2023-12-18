import {FC} from "react";
import {cn} from "@/lib/utils.ts";
import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {ItemDTO} from "@/class/dto/ItemDTO.tsx";

export interface ItemProps {
    item: ItemDTO;
}

const Item: FC<ItemProps> = ({item}) => {
    return (
        <TableRow>
            <TableCell>
                <div>
                    <img alt="name" src={item.pictureUrl} width={64} height={64}/>
                </div>
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.weight}</TableCell>
        </TableRow>
    );
};

export default Item;