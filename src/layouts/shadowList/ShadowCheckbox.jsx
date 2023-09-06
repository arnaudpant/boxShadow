import { useSelector, useDispatch } from "react-redux";
import { updateShadowCheckbox } from "../../features/shadows";

const ShadowCheckbox = ({ name, shadowID }) => {
    const dispatch = useDispatch();

    const checkboxShadow = useSelector((state) =>
        state.shadows.find((shadow) => shadow.id === shadowID)
    );

    return (
        <>
            <input
                type="checkbox"
                onChange={() =>
                    dispatch(updateShadowCheckbox({ shadowID, name }))
                }
                checked={checkboxShadow[name]}
                id={`checkbox-${name}-${shadowID}`}
                className="h-4 w-4 mr-2"
            />
            <label htmlFor={`checkbox-${name}-${shadowID}`} className="mr-5 leading-4">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </>
    );
};

export default ShadowCheckbox;
