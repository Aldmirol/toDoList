import { Button } from "../../../../base/button";
import { Description } from "../helpers";
import styles from "./styles.module.scss";

export function Row({
    title,
    description,
    status,
    id,
}) {
    const row = document.createElement('tr');

    row.classList.add(styles.row);

    row.append(
        Description({
            data: title,
            dataId: id
        }),
        Description({
            data: description,
            dataId: id
        }),
        Description({
            status: status,
            dataId: id
        }),
        Description({
            data: [Button({
                classList: "danger",
                content: "Delete",
            })],
            dataId: id
        }),
    );

    return row;
}