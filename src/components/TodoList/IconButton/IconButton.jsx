import PropTypes from "prop-types"

import { Button } from "./iconButton.styled";

const IconButton = ({children, onClick, ...applyProps}) => (
    <Button type="type" onClick={onClick} {...applyProps}>
        {children}
    </Button>
);
IconButton.defaultProps = {
    onClick: () => null,
    children: null,
};
IconButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    'aria-label':PropTypes.string.isRequired, // пропс доступності, якщо нема запису в кнопці!
};

export default IconButton;