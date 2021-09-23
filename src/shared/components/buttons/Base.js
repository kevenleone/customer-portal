import { Button } from "@clayui/core";
import ClayIcon from '@clayui/icon';

const BaseButton = ({ onClick, text, styles, preffixIcon, disabled }) => {
    return (
        <Button displayType={null} onClick={onClick} className={styles} disabled={disabled}>
            { preffixIcon && <ClayIcon className="mr-1" symbol={preffixIcon} />}
            { text }
        </Button>
    );
}

export default BaseButton;