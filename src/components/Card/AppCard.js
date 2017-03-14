import React from 'react';
import { Card, CardImg, CardText, CardBlock, Button,
  CardTitle, CardSubtitle } from 'reactstrap';

const AppCard = ({title, subtitle,img, description, onClick, target}) => {
  return (
    <div>
      <Card>
        <CardBlock>
          <CardTitle>{title}</CardTitle>
            { subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : <br />}
        </CardBlock>
        <img {...img} />
        <CardBlock>
          <CardText>{description}</CardText>
          <Button color='primary' onClick={onClick(target)}>Launch</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default AppCard;