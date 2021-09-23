import { Button } from "@clayui/core";

const PrimaryButton = ({ onClick, text }) => {
    return (
        <Button displayType="primary" className="rounded-lg" onClick={onClick}>
            { text }
        </Button>
    );
}

export default PrimaryButton;