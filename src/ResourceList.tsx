import ResourceListItem from "./ResourceListItem";
import { List } from "./types/resourceList";

interface ResourceListProps {
    list: List[]
    deleteListItem: (id: number) => void
}

function ResourceList (props: ResourceListProps) {
    const { list, deleteListItem } = props

    return (
        <>
            <h4>Resource List</h4>
            <table>
                <thead>
                    <tr>
                        <th>Resource Id</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {list
                        .sort((listValueA, listValueB) => listValueB.timestamp - listValueA.timestamp)
                        .map((listValue) => (
                            <ResourceListItem key={listValue.id} listItem={listValue} deleteListItem={deleteListItem} />
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default ResourceList;
