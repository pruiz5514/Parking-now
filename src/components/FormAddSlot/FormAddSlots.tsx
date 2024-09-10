import Button from "../UI/Button/Button"
import Form from "../General-form/Form"
import Input from "../UI/Input/Input";
import { FaThLarge } from "react-icons/fa";

const FormAddSlots: React.FC = () => {
    return (
        <Form
            title="Agregar Celdas"
            footerContent={
                <>
                    <Button text={"GUARDAR"} />
                </>
            }
        >
            <Input label="¿Cuántas Celdas deseas agregar?" id="" type="number" icon={FaThLarge} required={true} />
        </Form>
    )
}

export default FormAddSlots;