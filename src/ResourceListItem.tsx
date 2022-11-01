import { List } from "./types/resourceList";

interface ResourceListItemProps {
    listItem: List
    deleteListItem: (id: number) => void
}

function ResourceListItem (props: ResourceListItemProps) {
    const { listItem, deleteListItem } = props

    return (
        <tr key={listItem.id}>
            <td>{listItem.id}</td>
            <td>{listItem.type}</td>
            <td>{listItem.description ?? ''}</td>
            <td>
                <button type="button" onClick={() => {
                    deleteListItem(listItem.id)
                }}>X</button>
            </td>
        </tr>
    )
}

export default ResourceListItem;
