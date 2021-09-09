import { Button } from "@clayui/core";
import ClayIcon from '@clayui/icon';

const BaseButton = ({ onClick, text, styles, preffixIcon }) => {
    return (
        <Button displayType={null} onClick={onClick} className={styles}>
            { preffixIcon && <ClayIcon className="mr-1" symbol={preffixIcon} />}
            { text }
        </Button>
    );
}

export default BaseButton;