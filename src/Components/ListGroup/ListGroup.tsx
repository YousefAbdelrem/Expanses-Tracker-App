import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 5px 0;
`;
const ListItem = styled.li<ListItemsProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface ListItemsProps {
  active: boolean;
}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const getMessage = () => {
    {
      return items.length === 0 && <p>No items Found</p>;
    }
  };

  const [itemSelected, setIndex] = useState(0);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={itemSelected === index}
            key={item}
            onClick={() => {
              setIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
