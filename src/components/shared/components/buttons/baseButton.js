import { Button } from "@clayui/core";

const BaseButton = ({ onClick, text }) => {
    return (
        <Button displayType={null} onClick={onClick}>
            { text }
        </Button>
    );
}

export default BaseButton