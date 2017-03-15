import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom'

const AppCard = ({title, subtitle, img, description, onClick, target}) => {
  return (
      <Card outline color='primary' block style={{marginTop: '20px'}}>
        <CardImg {...img} />
        <CardBlock>
          <CardTitle>{title}</CardTitle>
            { subtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : <br /> }
          <CardText>{description}</CardText>
          <Link className='btn btn-outline btn-primary' to={target.url} target='_blank'>Launch</Link>
        </CardBlock>
      </Card>
  );
};

export default AppCard;