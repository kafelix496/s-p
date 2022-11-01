import { FormEvent, useRef, useState } from "react";
import { List } from "./types/resourceList";
import { ListType } from "./constants/resourceList";

interface InputFormProps {
    addList: (newList: List) => boolean
}

function InputForm (props: InputFormProps) {
    const { addList } = props

    const [isIdDuplicated, setIdDuplicateError] = useState<boolean>(false)

    const idRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLSelectElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const hadDuplicatedId = addList({
        id: +idRef.current!.value,
        type: typeRef.current!.value as ListType,
        description: descriptionRef.current?.value ?? '',
        timestamp: Date.now()
      })

      setIdDuplicateError(hadDuplicatedId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <div>Resource ID</div>
                    <input ref={idRef} required type="number" min={1} max={99999999} style={{ width: '250px' }} />
                </label>
            </div>
            <div>
                <label>
                    <div>Type</div>
                    <select ref={typeRef} required defaultValue="" style={{ width: '150px' }}>
                        <option value="" disabled>Choose...</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Phone">Phone</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    <div>Description</div>
                    <input ref={descriptionRef} type="text" maxLength={200} style={{ width: '100%' }} />
                </label>
            </div>

            {isIdDuplicated && <div style={{ color: 'red' }}>Please enter different ID</div>}

            <button>Add Resource</button>
        </form>
    )
}

export default InputForm;
